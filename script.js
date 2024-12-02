function downloadresume(){
  document.getElementById('pdf').style.display='none';
var element = document.getElementById('doc1');
const options = {
	filename: 'my-document.pdf',
	margin: 0,
  top : 0,
	image: { type: 'jpeg', quality: 0.98 },
	
	jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  enableLinks:true,
};
 
// New Promise-based usage:
html2pdf().set(options).from(element).save();
document.getElementById('pdf').style.display='inline';
}
 
