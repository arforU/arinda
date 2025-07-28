const content = document.getElementById('content');
const buttons = document.querySelectorAll('.buttons button');

const motivasi = {
  1: "“Dalam heningnya alam semesta, temukan kekuatan dalam dirimu untuk terus maju.”",
  2: "“Seperti bintang di langit, cahayamu akan selalu bersinar walau dalam gelap.”",
  3: "“Meditasi adalah perjalanan ke dalam diri, tempat kedamaian abadi bersemayam.”",
  4: "“Ketika pikiran tenang, jiwa menemukan kebebasan yang sejati.”"
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');
    content.textContent = motivasi[page] || "Motivasi belum tersedia.";
  });
});
