<template>
  <div class="card">
    <img class="" src="../assets/image-qr-code.png">
    <div class="px-3">
      <h3 class="main-txt">Improve your front-end skills by building projects</h3>
      <p class="sec-txt">Scan th QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QRCodeCard"
}
</script>

<style scoped>
.card img{
  @apply rounded-2xl;
}
.card{
  @apply flex flex-col items-center;
  @apply p-4 w-[86%] sm:w-[340px] xl:w-[340px] bg-white rounded-3xl mx-6;
  @apply text-center;
}
.main-txt{
  @apply mt-6 text-dark-blue text-2xl font-bold;
}
.sec-txt{
  @apply mt-4 mb-6 text-[15px] text-blue font-normal;
}
</style>