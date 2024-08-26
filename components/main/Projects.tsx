import React from "react";
import ProjectCard from "../sub/ProjectCard";
import video from "./asset.video.mp4"; 

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid gap-10 px-10 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          src="/vbot.png"
          title="Vbot(prog-gpt)"
          description="VBOT is an AI chatbot that was developed for coders to return precise code of any language using NPL and OPEN AI ."
          mediaType="image" 
        />
        <ProjectCard
          src="/Cosmetic.png"
          title="E-commerce Shopping Cart "
          description="Shopping cart, an E-Commerce website was developed using CRUD technology with both client and admin access."
          mediaType="image" 
        />
        <ProjectCard
          src="/Online.png"
          title="Online Exam System "
          description="Its a web based application developed using python and django framework , which provides an automated and online examination platform for colleges or universities."
          mediaType="image" 
        />
        <ProjectCard
          src="/StreetFight.mp4" 
          title="Street Fight"
          description="A combat game developed using construct 3 , challenging game to create only using 40 events in the app."
          mediaType="video"
        />
        <ProjectCard
          src="/UnrealLevel.mp4" 
          title="Navy-Gate"
          description="A 3d pirate themed group project , wherein the player has to find the gate to free himself from the curse of the sea godess , here the level is dark jail themed with pirate gun access and  shooting mechanics developed using unreal engine."
          mediaType="video"
        />
        <ProjectCard
          src="/PlatformLevel.mp4"
          title="Shape World"
          description="A 2d platformer game developed in unity, wherein the player has to escape from dangers in the enchanted shape land with moving nd falling platforms , within 3 minutes of time , he is denied weapons , can teleport through portals and unlock the ultimatedoor with its corresponding key to win the game."
          mediaType="video"
        />
        <ProjectCard
          src="/MobileV.mp4"
          title="One Tap"
          description="A Hypercasual 3d game developed in unity, wherein the player has to tap the screen to move the ball on the platform , highest miles reached and the number of diamonds collected ranks the winning criteria of this game  ."
          mediaType="video"
        />
        <ProjectCard
          src="/VMaze.mp4"
          title="AR-Nostalgia"
          description="This game is an attempt to bring our childhood game labyrinth to life through the concept of AR ,developed using unity,with a twist , wherein the player has to dodge all the yellow balls and manage to bring the red ball to the center which remarks the winning criteria."
          mediaType="video"
        />
        <ProjectCard
          src="/NFT.jpg"
          title="AVAX-Gods NFT "
          description="an multiplayer game developed using react and avalanche keys , wherein 2 players can play the game by trading their cards and hence earning benefits too , this project is under progress."
          mediaType="image" 
        />
      </div>
    </div>
  );
};

export default Projects;

