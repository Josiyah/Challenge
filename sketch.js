var player,skeletonBoss,playerAnimationDown,playerAnimationLeft,playerAnimationRight,playerAnimationUp,skeletonAttacking,skeletonWalking,skeletonDefeated;

function preload(){
  playerAnimationDown = loadAnimation("PlayerDown1.png","PlayerDown2.png","PlayerDown3.png","PlayerDown4.png");
  playerAnimationLeft = loadAnimation("PlayerLeft1.png","PlayerLeft2.png","PlayerLeft3.png","PlayerLeft4.png");
  playerAnimationRight = loadAnimation("PlayerRight1.png","PlayerRight2.png","PLayerRight3.png","PlayerRight4.png");
  playerAnimationUp = loadAnimation("PlayerUp1.png","PlayerUp2.png","PlayerUp3.png","PlayerUp4.png");

  skeletonAttacking = loadAnimation("SkeletonAttack1.png","SkeletonAttack2.png","SkeletonAttack3.png","SkeletonAttack4.png","SkeletonAttack5.png","SkeletonAttack6.png","SkeletonAttack7.png","SkeletonAttack8.png","SkeletonAttack9.png","SkeletonAttack10.png","SkeletonAttack11.png","SkeletonAttack12.png","SkeletonAttack13.png","SkeletonAttack14.png","SkeletonAttack15.png","SkeletonAttack16","SkeletonAttack17");
  skeletonWalking = loadAnimation("SkeletonWalking1.png","SkeletonWalking2.png","SkeletonWalking3.png","SkeletonWalking4.png","SkeletonWalking5.png","SkeletonWalking6.png","SkeletonWalking7.png","SkeletonWalking8.png","SkeletonWalking9.png","SkeletonWalking10.png");
  skeletonDefeated = loadAnimation("SkeletonDefeated1.png","SkeletonDefeated2.png","SkeletonDefeated3.png","SkeletonDefeated4.png","SkeletonDefeated5.png","SkeletonDefeated6.png","SkeletonDefeated7.png","SkeletonDefeated8.png","SkeletonDefeated9.png","SkeletonDefeated10.png","SkeletonDefeated11.png","SkeletonDefeated12.png","SkeletonDefeated13.png","SkeletonDefeated14.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawSprites();
}