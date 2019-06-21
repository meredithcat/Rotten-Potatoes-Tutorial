// comments.js

const Comment = require('../models/comment');
module.exports = (app) => {
    // NEW comment
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then((comment) => {
          console.log(comment);
          res.redirect(`/reviews/${comment.reviewId}`); // Redirect to reviews/:id
        }).catch((err) => {
          console.log(err.message)
        })
    })

    app.delete('/reviews/comments/:id', (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
          res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
          console.log(err.message);
        })
    })
}
