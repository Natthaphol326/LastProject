<template>
  <div class="container fluid">
    <div class="page1">
      <div class="img img1 shadow-sm p-3 mb-5 bg-body rounded"></div>
      <div class="img img2 shadow-sm p-3 mb-5 bg-body rounded"></div>
      <div class="img img3 shadow-sm p-3 mb-5 bg-body rounded"></div>
      <div class="img img4 shadow-sm p-3 mb-5 bg-body rounded"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  text-align: center;
  margin-top: 100px;
}
.img {
  width: 240px;
  height: 400px;
  display: inline-block;
  margin: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 2s;
}
.img:hover {
  background-position: bottom center;
}
.img1 {
  background-image: url(https://get.pxhere.com/photo/hair-white-animal-cute-photo-looking-pet-fur-portrait-young-kitten-cat-macro-feline-mammal-black-baby-close-up-nose-whiskers-grey-kitty-eye-little-vertebrate-domestic-adorable-downy-cat-face-european-shorthair-small-to-medium-sized-cats-cat-like-mammal-domestic-short-haired-cat-public-domain-images-1068440.jpg);
}
.img2 {
  background-image: url(http://petsidea95.com/wp-content/uploads/2020/09/100772080_3019337064786941_2367074864409833861_n.jpg);
}
.img3 {
  background-image: url(https://get.wallhere.com/photo/portrait-love-field-dog-brown-whiskers-Jack-Pets-happiness-pet-Rescue-pentax-Odin-50mm-animal-outdoor-depth-puppy-dogs-russell-mix-snout-dog-like-mammal-carnivoran-dog-crossbreeds-dog-breed-street-dog-pitbull-brindle-patterdale-terrier-petrait-petportait-dontbullymybreed-treeing-tennessee-brindle-plott-hound-849130.jpg);
}
.img4 {
  background-image: url(https://get.pxhere.com/photo/bridge-animal-pet-fur-kitten-cat-mammal-gray-black-cat-black-monochrome-close-up-nose-whiskers-grey-kitty-animals-vertebrate-european-shorthair-chartreux-russian-blue-korat-small-to-medium-sized-cats-cat-like-mammal-carnivoran-nebelung-domestic-short-haired-cat-titus-1142306.jpg);
}
.img5 {
  background-image: url(https://i0.hippopx.com/photos/29/530/552/puppy-dog-pet-portrait-preview.jpg);
}
</style>
