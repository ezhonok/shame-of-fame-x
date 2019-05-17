const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user')


//Index route 
 router.get('/', async (req, res, next) => {

  console.log(req.body, ' get route')
     try  {
      const allPosts = await Post.find().populate('user');

      res.json({
        status: 200,
        data: allPosts
      });

    } catch (err){
      next(err)
    }
});



//New 
router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdPost = await Post.create(req.body);
    console.log("\nhere is createdPost");
    console.log(createdPost);
    const foundUser = await User.findById(req.session.userDataId)
    console.log("\nhere is foundUser")
    console.log(foundUser);
    foundUser.post.push(createdPost)
    await foundUser.save()

    createdPost.user = foundUser
    await createdPost.save()
    
    res.json({
      status: 200,
      data: createdPost
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});


//Show 
router.get('/:id', async (req, res, next) => {
     try  {
      console.log('hitting the show route');
        const foundPost = await Post.findById(req.params.id);

        res.json({
          status: 200,
          data: foundPost
        });

      } catch (err){
        next(err);
      }

});

//Update
router.put('/:id', async (req, res) => {
  try {
    console.log('hitting the put route');
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedPost
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {
  console.log("delete route");
  try {

     const deletedPost = await Post.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedPost
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
