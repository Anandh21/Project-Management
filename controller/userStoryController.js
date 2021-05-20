const express = require("express");
const UserStory = require("../models/userStory");
const Project = require("../models/project");

const allByProject = (request, response) => {
    const projectId = request.params.projectId;
    UserStory.find({projectId})
        .then(userStories =>{
            response.render("userStories",{projectId , userStories})
        })
        .catch(err => console.log(err));
    //response.render("userStories",{ projectId });
}
const createGet = (request, response) => {
    console.log("alpha");
    const projectId = request.params.projectId;
    response.render("userStories/create",{ projectId });
    
    
}
const createPost = (request, response) => {
    UserStory.create(request.body)
        .then(() => response.redirect("/user_Stories/"+request.body.projectId))
        .catch(err => console.log(err));

}
const updateGet = (request, response) => {

}
const updatePost = (request, response) => {

}
const deleteGet = (request, response) => {

}
const DeletePost = (request, response) => {

}

module.exports = {
    allByProject,
    createGet,
    createPost
}
