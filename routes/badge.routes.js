const express = require('express');
const router = express.Router();
const Badge = require('../models/badge');

/**
 * @route api/badges/
 * @desc  Create a new badge
 * @param  body fistName, lastName, email, jobTitle, twitter
 */
router.post('/', async (req, res) => {
  const { body } = req;
  await Badge.create(body, (err, doc) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Success'
    });
  });
});

/**
 * @route api/badges/
 * @desc  Read all Badges
 */
router.get('/', async (req, res) => {
  await Badge.find({}, (err, docs) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      data: docs,
      success: true
    });
  });
});

/**
 * @route api/badges/:id
 * @desc  Read a badge
 * @param  id badge id
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  await Badge.findById(id, (err, doc) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send(doc);
  });
});


/**
 * @route api/badges/:id
 * @desc  Create a new badge
 * @param  id Badge id to update
 * @body badge data: fistName, lastName, email, jobTitle, twitter
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {body} = req;

  await Badge.findByIdAndUpdate(id,body,(err, doc) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Success'
    });
  });
});

/**
 * @route api/badges/:id
 * @desc  Delete a badge
 * @param  id badge id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Badge.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true
    });
  });
});

module.exports = router;
