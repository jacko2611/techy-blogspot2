const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Find all posts with their linked comments
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        // Use the ID from the session
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at'
          ],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
      ],
    });

    const posts = postData.map(post => post.get({ plain: true }));

    // Pass data and session flag into handlebars template
    res.render('dashboard', {
      posts,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a post by id and edit the requested post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'created_at', 'content'],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    const post = postData.get({ plain: true });
    // Pass data to handlebars template
    res.render('edit-post', {
      post,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create post
router.get('/create/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        // Use the ID from the session
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'created_at', 'content'],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = postData.map(post => post.get({ plain: true }));
    res.render('create-post', {
      posts,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;