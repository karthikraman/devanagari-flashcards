// Sample Flashcard Data (You will provide this)
let flashcards = [
  {character: '𑆃', translated: 'अ', context: '𑆃 𑆄 𑆅 𑆆 (अ आ इ ई)'}, 
  {character: '𑆄', translated: 'आ', context: '𑆃 𑆄 𑆅 𑆆 (अ आ इ ई)'}, 
  {character: '𑆅', translated: 'इ', context: '𑆃 𑆄 𑆅 𑆆 (अ आ इ ई)'}, 
  {character: '𑆆', translated: 'ई', context: '𑆃 𑆄 𑆅 𑆆 (अ आ इ ई)'}, 
  {character: '𑆇', translated: 'उ', context: '𑆇 𑆈 𑆉 𑆊 (उ ऊ ऋ ॠ)'}, 
  {character: '𑆈', translated: 'ऊ', context: '𑆇 𑆈 𑆉 𑆊 (उ ऊ ऋ ॠ)'}, 
  {character: '𑆉', translated: 'ऋ', context: '𑆇 𑆈 𑆉 𑆊 (उ ऊ ऋ ॠ)'}, 
  {character: '𑆊', translated: 'ॠ', context: '𑆇 𑆈 𑆉 𑆊 (उ ऊ ऋ ॠ)'}, 
  {character: '𑆋', translated: 'ऌ', context: '𑆋 𑆌 𑆍 𑆎 (ऌ ॡ ए ऐ)'}, 
  {character: '𑆌', translated: 'ॡ', context: '𑆋 𑆌 𑆍 𑆎 (ऌ ॡ ए ऐ)'}, 
  {character: '𑆍', translated: 'ए', context: '𑆋 𑆌 𑆍 𑆎 (ऌ ॡ ए ऐ)'}, 
  {character: '𑆎', translated: 'ऐ', context: '𑆋 𑆌 𑆍 𑆎 (ऌ ॡ ए ऐ)'}, 
  {character: '𑆏', translated: 'ओ', context: '𑆏 𑆐 𑆃𑆁 𑆃𑆂 (ओ औ अं अः)'}, 
  {character: '𑆐', translated: 'औ', context: '𑆏 𑆐 𑆃𑆁 𑆃𑆂 (ओ औ अं अः)'}, 
  {character: '𑆃𑆁', translated: 'अं', context: '𑆏 𑆐 𑆃𑆁 𑆃𑆂 (ओ औ अं अः)'}, 
  {character: '𑆃𑆂', translated: 'अः', context: '𑆏 𑆐 𑆃𑆁 𑆃𑆂 (ओ औ अं अः)'}, 
  {character: '𑆑', translated: 'क', context: '𑆑 𑆒 𑆓 𑆔 𑆕 (क ख ग घ ङ)'}, 
  {character: '𑆒', translated: 'ख', context: '𑆑 𑆒 𑆓 𑆔 𑆕 (क ख ग घ ङ)'}, 
  {character: '𑆓', translated: 'ग', context: '𑆑 𑆒 𑆓 𑆔 𑆕 (क ख ग घ ङ)'}, 
  {character: '𑆔', translated: 'घ', context: '𑆑 𑆒 𑆓 𑆔 𑆕 (क ख ग घ ङ)'}, 
  {character: '𑆕', translated: 'ङ', context: '𑆑 𑆒 𑆓 𑆔 𑆕 (क ख ग घ ङ)'}, 
  {character: '𑆖', translated: 'च', context: '𑆖 𑆗 𑆘 𑆙 𑆚 (च छ ज झ ञ)'}, 
  {character: '𑆗', translated: 'छ', context: '𑆖 𑆗 𑆘 𑆙 𑆚 (च छ ज झ ञ)'}, 
  {character: '𑆘', translated: 'ज', context: '𑆖 𑆗 𑆘 𑆙 𑆚 (च छ ज झ ञ)'}, 
  {character: '𑆙', translated: 'झ', context: '𑆖 𑆗 𑆘 𑆙 𑆚 (च छ ज झ ञ)'}, 
  {character: '𑆚', translated: 'ञ', context: '𑆖 𑆗 𑆘 𑆙 𑆚 (च छ ज झ ञ)'}, 
  {character: '𑆛', translated: 'ट', context: '𑆛 𑆜 𑆝 𑆞 𑆟 (ट ठ ड ढ ण)'}, 
  {character: '𑆜', translated: 'ठ', context: '𑆛 𑆜 𑆝 𑆞 𑆟 (ट ठ ड ढ ण)'}, 
  {character: '𑆝', translated: 'ड', context: '𑆛 𑆜 𑆝 𑆞 𑆟 (ट ठ ड ढ ण)'}, 
  {character: '𑆞', translated: 'ढ', context: '𑆛 𑆜 𑆝 𑆞 𑆟 (ट ठ ड ढ ण)'}, 
  {character: '𑆟', translated: 'ण', context: '𑆛 𑆜 𑆝 𑆞 𑆟 (ट ठ ड ढ ण)'}, 
  {character: '𑆠', translated: 'त', context: '𑆠 𑆡 𑆢 𑆣 𑆤 (त थ द ध न)'}, 
  {character: '𑆡', translated: 'थ', context: '𑆠 𑆡 𑆢 𑆣 𑆤 (त थ द ध न)'}, 
  {character: '𑆢', translated: 'द', context: '𑆠 𑆡 𑆢 𑆣 𑆤 (त थ द ध न)'}, 
  {character: '𑆣', translated: 'ध', context: '𑆠 𑆡 𑆢 𑆣 𑆤 (त थ द ध न)'}, 
  {character: '𑆤', translated: 'न', context: '𑆠 𑆡 𑆢 𑆣 𑆤 (त थ द ध न)'}, 
  {character: '𑆥', translated: 'प', context: '𑆥 𑆦 𑆧 𑆨 𑆩 (प फ ब भ म)'}, 
  {character: '𑆦', translated: 'फ', context: '𑆥 𑆦 𑆧 𑆨 𑆩 (प फ ब भ म)'}, 
  {character: '𑆧', translated: 'ब', context: '𑆥 𑆦 𑆧 𑆨 𑆩 (प फ ब भ म)'}, 
  {character: '𑆨', translated: 'भ', context: '𑆥 𑆦 𑆧 𑆨 𑆩 (प फ ब भ म)'}, 
  {character: '𑆩', translated: 'म', context: '𑆥 𑆦 𑆧 𑆨 𑆩 (प फ ब भ म)'}, 
  {character: '𑆪', translated: 'य', context: '𑆪 𑆫 𑆬 𑆮 (य र ल व)'}, 
  {character: '𑆫', translated: 'र', context: '𑆪 𑆫 𑆬 𑆮 (य र ल व)'}, 
  {character: '𑆬', translated: 'ल', context: '𑆪 𑆫 𑆬 𑆮 (य र ल व)'}, 
  {character: '𑆮', translated: 'व', context: '𑆪 𑆫 𑆬 𑆮 (य र ल व)'}, 
  {character: '𑆯', translated: 'श', context: '𑆯 𑆰 𑆱 𑆲 (श ष स ह)'}, 
  {character: '𑆰', translated: 'ष', context: '𑆯 𑆰 𑆱 𑆲 (श ष स ह)'}, 
  {character: '𑆱', translated: 'स', context: '𑆯 𑆰 𑆱 𑆲 (श ष स ह)'}, 
  {character: '𑆲', translated: 'ह', context: '𑆯 𑆰 𑆱 𑆲 (श ष स ह)'}, 
  {character: '𑆭', translated: 'ळ', context: '𑆭 𑆑𑇀𑆰 𑆘𑇀𑆚 (ळ क्ष ज्ञ)'}, 
  {character: '𑆑𑇀𑆰', translated: 'क्ष', context: '𑆭 𑆑𑇀𑆰 𑆘𑇀𑆚 (ळ क्ष ज्ञ)'}, 
  {character: '𑆘𑇀𑆚', translated: 'ज्ञ', context: '𑆭 𑆑𑇀𑆰 𑆘𑇀𑆚 (ळ क्ष ज्ञ)'},  
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
  