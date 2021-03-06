const db = require('../models');

const addPost = (req, res) => { //adds a post screenshots optional
  console.log(req.body);

  const {
    title,
    link,
    desc,
    screenshot
  } = req.body;

  db.Post.create({
      title,
      link,
      desc,
      screenshot
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

};
const getPosts = (req, res) => {
  db.Post.findAll({}) //this one is not being used currently
    .then(dbPostData => {
      res.render("view", {
        postData: dbPostData
      })
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const deletePost = (req, res) => {//accepts as a parameter
  db.Post.destroy({  
    where: { id: req.params.id }
  }).then(
    function (data) {res.json(data)}
    ).catch(err => {
      console.log(err);
      res.json(err);
    });
}

const updatePost = (req, res) => {

console.log(req.body);

  const {
    title,
    link,
    desc,
    screenshot
  } = req.body;

  console.log(req.body.title);

  db.Post.findOne({where: {id : req.params.id}
      
    }).then(dbPostData => {dbPostData.update({
      title,
      link,
      desc,
      screenshot
    })}).then(updatedData => res.json(updatedData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

}

const upVotePost = (req, res) => {

  var newScore;
  db.Post.findOne({where: {id : req.params.id}
      
  }).then(dbScore => {

    newScore = dbScore.score;
    newScore++;
    console.log(newScore);
    dbScore.update({
      score: newScore
    })

  }
  ).then(updatedData => res.json(updatedData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
}

const downVotePost = (req, res) => {

  var newScore;
  db.Post.findOne({where: {id : req.params.id}
      
  }).then(dbScore => {

    newScore = dbScore.score;
    newScore--;
    console.log(newScore);
    dbScore.update({
      score: newScore
    })

  }
  ).then(updatedData => res.json(updatedData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
}

module.exports = {
  addPost,
  getPosts,
  deletePost,
  updatePost,
  upVotePost,
  downVotePost
}