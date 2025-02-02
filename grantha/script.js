// Sample Flashcard Data (You will provide this)
let flashcards = [
  {character: '𑌅', translated: 'अ', context: '𑌅 𑌆 𑌇 𑌈 (अ आ इ ई)'}, 
  {character: '𑌆', translated: 'आ', context: '𑌅 𑌆 𑌇 𑌈 (अ आ इ ई)'}, 
  {character: '𑌇', translated: 'इ', context: '𑌅 𑌆 𑌇 𑌈 (अ आ इ ई)'}, 
  {character: '𑌈', translated: 'ई', context: '𑌅 𑌆 𑌇 𑌈 (अ आ इ ई)'}, 
  {character: '𑌉', translated: 'उ', context: '𑌉 𑌊 𑌋 𑍠 (उ ऊ ऋ ॠ)'}, 
  {character: '𑌊', translated: 'ऊ', context: '𑌉 𑌊 𑌋 𑍠 (उ ऊ ऋ ॠ)'}, 
  {character: '𑌋', translated: 'ऋ', context: '𑌉 𑌊 𑌋 𑍠 (उ ऊ ऋ ॠ)'}, 
  {character: '𑍠', translated: 'ॠ', context: '𑌉 𑌊 𑌋 𑍠 (उ ऊ ऋ ॠ)'}, 
  {character: '𑌌', translated: 'ऌ', context: '𑌌 𑍡 𑌏 𑌐 (ऌ ॡ ए ऐ)'}, 
  {character: '𑍡', translated: 'ॡ', context: '𑌌 𑍡 𑌏 𑌐 (ऌ ॡ ए ऐ)'}, 
  {character: '𑌏', translated: 'ए', context: '𑌌 𑍡 𑌏 𑌐 (ऌ ॡ ए ऐ)'}, 
  {character: '𑌐', translated: 'ऐ', context: '𑌌 𑍡 𑌏 𑌐 (ऌ ॡ ए ऐ)'}, 
  {character: '𑌓', translated: 'ओ', context: '𑌓 𑌔 𑌅𑌂 𑌅𑌃 (ओ औ अं अः)'}, 
  {character: '𑌔', translated: 'औ', context: '𑌓 𑌔 𑌅𑌂 𑌅𑌃 (ओ औ अं अः)'}, 
  {character: '𑌅𑌂', translated: 'अं', context: '𑌓 𑌔 𑌅𑌂 𑌅𑌃 (ओ औ अं अः)'}, 
  {character: '𑌅𑌃', translated: 'अः', context: '𑌓 𑌔 𑌅𑌂 𑌅𑌃 (ओ औ अं अः)'}, 
  {character: '𑌕', translated: 'क', context: '𑌕 𑌖 𑌗 𑌘 𑌙 (क ख ग घ ङ)'}, 
  {character: '𑌖', translated: 'ख', context: '𑌕 𑌖 𑌗 𑌘 𑌙 (क ख ग घ ङ)'}, 
  {character: '𑌗', translated: 'ग', context: '𑌕 𑌖 𑌗 𑌘 𑌙 (क ख ग घ ङ)'}, 
  {character: '𑌘', translated: 'घ', context: '𑌕 𑌖 𑌗 𑌘 𑌙 (क ख ग घ ङ)'}, 
  {character: '𑌙', translated: 'ङ', context: '𑌕 𑌖 𑌗 𑌘 𑌙 (क ख ग घ ङ)'}, 
  {character: '𑌚', translated: 'च', context: '𑌚 𑌛 𑌜 𑌝 𑌞 (च छ ज झ ञ)'}, 
  {character: '𑌛', translated: 'छ', context: '𑌚 𑌛 𑌜 𑌝 𑌞 (च छ ज झ ञ)'}, 
  {character: '𑌜', translated: 'ज', context: '𑌚 𑌛 𑌜 𑌝 𑌞 (च छ ज झ ञ)'}, 
  {character: '𑌝', translated: 'झ', context: '𑌚 𑌛 𑌜 𑌝 𑌞 (च छ ज झ ञ)'}, 
  {character: '𑌞', translated: 'ञ', context: '𑌚 𑌛 𑌜 𑌝 𑌞 (च छ ज झ ञ)'}, 
  {character: '𑌟', translated: 'ट', context: '𑌟 𑌠 𑌡 𑌢 𑌣 (ट ठ ड ढ ण)'}, 
  {character: '𑌠', translated: 'ठ', context: '𑌟 𑌠 𑌡 𑌢 𑌣 (ट ठ ड ढ ण)'}, 
  {character: '𑌡', translated: 'ड', context: '𑌟 𑌠 𑌡 𑌢 𑌣 (ट ठ ड ढ ण)'}, 
  {character: '𑌢', translated: 'ढ', context: '𑌟 𑌠 𑌡 𑌢 𑌣 (ट ठ ड ढ ण)'}, 
  {character: '𑌣', translated: 'ण', context: '𑌟 𑌠 𑌡 𑌢 𑌣 (ट ठ ड ढ ण)'}, 
  {character: '𑌤', translated: 'त', context: '𑌤 𑌥 𑌦 𑌧 𑌨 (त थ द ध न)'}, 
  {character: '𑌥', translated: 'थ', context: '𑌤 𑌥 𑌦 𑌧 𑌨 (त थ द ध न)'}, 
  {character: '𑌦', translated: 'द', context: '𑌤 𑌥 𑌦 𑌧 𑌨 (त थ द ध न)'}, 
  {character: '𑌧', translated: 'ध', context: '𑌤 𑌥 𑌦 𑌧 𑌨 (त थ द ध न)'}, 
  {character: '𑌨', translated: 'न', context: '𑌤 𑌥 𑌦 𑌧 𑌨 (त थ द ध न)'}, 
  {character: '𑌪', translated: 'प', context: '𑌪 𑌫 𑌬 𑌭 𑌮 (प फ ब भ म)'}, 
  {character: '𑌫', translated: 'फ', context: '𑌪 𑌫 𑌬 𑌭 𑌮 (प फ ब भ म)'}, 
  {character: '𑌬', translated: 'ब', context: '𑌪 𑌫 𑌬 𑌭 𑌮 (प फ ब भ म)'}, 
  {character: '𑌭', translated: 'भ', context: '𑌪 𑌫 𑌬 𑌭 𑌮 (प फ ब भ म)'}, 
  {character: '𑌮', translated: 'म', context: '𑌪 𑌫 𑌬 𑌭 𑌮 (प फ ब भ म)'}, 
  {character: '𑌯', translated: 'य', context: '𑌯 𑌰 𑌲 𑌵 (य र ल व)'}, 
  {character: '𑌰', translated: 'र', context: '𑌯 𑌰 𑌲 𑌵 (य र ल व)'}, 
  {character: '𑌲', translated: 'ल', context: '𑌯 𑌰 𑌲 𑌵 (य र ल व)'}, 
  {character: '𑌵', translated: 'व', context: '𑌯 𑌰 𑌲 𑌵 (य र ल व)'}, 
  {character: '𑌶', translated: 'श', context: '𑌶 𑌷 𑌸 𑌹 (श ष स ह)'}, 
  {character: '𑌷', translated: 'ष', context: '𑌶 𑌷 𑌸 𑌹 (श ष स ह)'}, 
  {character: '𑌸', translated: 'स', context: '𑌶 𑌷 𑌸 𑌹 (श ष स ह)'}, 
  {character: '𑌹', translated: 'ह', context: '𑌶 𑌷 𑌸 𑌹 (श ष स ह)'}, 
  {character: '𑌳', translated: 'ळ', context: '𑌳 𑌕𑍍𑌷 𑌜𑍍𑌞 (ळ क्ष ज्ञ)'}, 
  {character: '𑌕𑍍𑌷', translated: 'क्ष', context: '𑌳 𑌕𑍍𑌷 𑌜𑍍𑌞 (ळ क्ष ज्ञ)'}, 
  {character: '𑌜𑍍𑌞', translated: 'ज्ञ', context: '𑌳 𑌕𑍍𑌷 𑌜𑍍𑌞 (ळ क्ष ज्ञ)'},  
];
  
  let currentCardIndex = 0;
  let score = 0;
  
  function showCard() {
    const card = flashcards[currentCardIndex];
    document.getElementById("character").innerText = card.character;
    document.getElementById("correct-answer").innerText = ` ${card.character} = ${card.translated}`;
    document.getElementById("context").innerText = `${card.context}`;
    document.getElementById("user-input").value = '';
    document.querySelector('.back').classList.add("hidden");
    document.querySelector('.front').classList.remove("hidden");
  }
  
  let correctCount = 0;
  let incorrectCount = 0;
  let streak = 0;

  function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim();
    const correctAnswer = flashcards[currentCardIndex].translated;
  
    // Clear input for next answer
    document.getElementById("user-input").value = "";
  
    // Compare user input with the correct answer
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      score++;
      correctCount++;
      streak++;
      showStatus("Correct!", true);
    } else {
      incorrectCount++;
      streak = 0;  // Reset streak on incorrect answer
      showStatus(`Incorrect! `, false);
    }
  
    // Update stats display
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("correct").innerText = `Correct: ${correctCount}`;
    document.getElementById("incorrect").innerText = `Incorrect: ${incorrectCount}`;
    document.getElementById("streak").innerText = `Streak: ${streak}`;


    // Display the correct answer and context
    document.querySelector('.front').classList.add("hidden");
    document.querySelector('.back').classList.remove("hidden");
  
  }
  
  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard();
  }
  
  function randomCard() {
    currentCardIndex = Math.floor(Math.random() * flashcards.length);
    showCard();
  }

  function showStatus(message, success) {
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = message;
    statusMessage.classList.remove("hidden", "success", "error");
    statusMessage.classList.add(success ? "success" : "error");
    statusMessage.style.visibility = 'visible';

    setTimeout(() => {
      statusMessage.style.visibility = 'hidden';
    }, 3000);
  }
  
  // Initial call to display the first flashcard
  showCard();
  