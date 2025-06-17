function checkScene1() {
  const code = document.getElementById('code').value.trim();
  if (code === "20240805") {
    window.location.href = "./room2.html";
  } else {
    document.getElementById('msg').innerText = "❌ คำตอบผิด ลองนึกถึงวันพิเศษของเรา 💌";
  }
}

function checkScene2() {
  const code = document.getElementById('code').value.trim().toLowerCase();
  if (code === "เธอ") {
    window.location.href = "./ending.html";
  } else {
    document.getElementById('msg').innerText = "❌ ยังไม่ถูก ลองนึกดีๆ นะ 😊";
  }
}

function checkScene1() {
  const code = document.getElementById('code').value.trim();
  if (code === "20240805") {
    document.getElementById("successSound").play();
    setTimeout(() => {
      window.location.href = "./room2.html";
    }, 1000); // รอให้เสียงเล่นก่อนเปลี่ยนหน้า
  } else {
    document.getElementById('msg').innerText = "❌ คำตอบผิด ลองนึกถึงวันพิเศษของเรา 💌";
    document.getElementById("errorSound").play();
  }
}
