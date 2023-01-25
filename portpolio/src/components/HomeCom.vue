<template>
    <div class="container">
      <div class="subtitle">Hello! I am a</div>
      <p class="text-container">
        <span class="typed-text">{{ typedText }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }"></span>
      </p>    
    </div> 
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'HomeCom',
  setup() {
    const array = ["Web Developer", "Frontend Developer", "Junior Developer"];
    let typedText = ref('');
    let typeStatus = false;
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const newTextDelay = 2000;
    let arrayIndex = 0;
    let charIndex = 0;

    const typeTextMethod = () => {
      if (charIndex < array[arrayIndex].length) {
        if (!typeStatus) typeStatus = true;
        typedText.value += array[arrayIndex].charAt(
          charIndex
        );
        charIndex += 1;
        setTimeout(typeTextMethod, typingSpeed);
      } else {
        typeStatus = false;
        setTimeout(eraseTextMethod, newTextDelay);
      }
    }
   const eraseTextMethod = () => {
      if (charIndex > 0) {
        if (!typeStatus) typeStatus = true;
        typedText.value = array[arrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex -= 1;
        setTimeout(eraseTextMethod, erasingSpeed);
      } else {
        typeStatus = false;
        arrayIndex += 1;
        if (arrayIndex >= array.length)
          arrayIndex = 0;
        setTimeout(typeTextMethod, typingSpeed + 1000);
      }
    }
    onMounted(() => {
      typeTextMethod()
    })
    return {
      typedText
    }
  }
}
</script>

<style scoped>
.container {
  margin: 15% 0;
}
.subtitle {
  font-size: 70px;
  font-weight: 900;
}
.blinking-cursor {
  font-size: 70px;
  -webkit-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
.typed-text {
  font-size: 70px;
  font-weight: 900;
}
.text-container {
  display: block;
}
</style>