function checkScene1() {
  const code = document.getElementById('code').value.trim();
  if (code === "20220616") {
    window.location.href = "./room2.html";
  } else {
    document.getElementById('msg').innerText = "❌ คำตอบผิด ลองนึกถึงวันคบกันสิ 💌";
  }
}
function checkScene2() {
  const code = document.getElementById('code').value.trim().toLowerCase();
  if (code === "honey") {
    window.location.href = "./ending.html";
  } else {
    document.getElementById('msg').innerText = "❌ ยังไม่ถูก ลองนึกดีๆ นะ 😊";
  }
}