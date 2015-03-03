function demoPDF() {
	
	var doc = new jsPDF("landscape");

	doc.text(20, 20, 'Milestone Tracker');
	doc.text(60, 50, 'Week 1');

	doc.text(40, 70, $("#week").val());
	doc.text(80, 100, $("#info").val());
	doc.text(80, 100, $("#info1").val());
	
	doc.addPage();
	doc.text(20, 20, '');


	doc.setFontType("bold");
    doc.setTextColor(255, 0, 0);
	
	doc.save('Milestone.pdf');

	}