#target indesign
#targetengine "main"

var pdfFiles = Folder.selectDialog().getFiles("*.pdf" || file.type == "PDF " );
if(pdfFiles == "" || pdfFiles == null)  
  exit(0);
var name = [];
var page1= [];
var page2 =[];
var size =[];
var label = false;
var runKey = false;
var outputArray=[1];

var typeArray = ["День 1 Левая","День 1 Правая","-", "День 2 Левая","День 2 Правая","-","День 3 Левая","День 3 Правая","-","БЦ","элит","Общежитие","-","Жодино","Борисов"]; 
var typeColorArray = [[40,0,0,0],[0,40,0,0],"-",[40,0,0,0],[0,40,0,0],"-",[40,0,0,0],[0,40,0,0],"-",[40,40,0,0],[0,40,40,0],[40,0,40,0],"-",[0,0,0,0],[0,0,0,0]];

var type = typeArray[0];
var typeColor = typeColorArray[0]; 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tmpFolder ="~/Desktop/LIFT";
checkFolder (tmpFolder);

function checkFolder (pathToFolder){
    if (Folder(pathToFolder).created == null){
        Folder(pathToFolder).create();
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function timer() {
  this.startTime = null;
  this.endTime = null;
}
timer.prototype.start = function () {
  this.startTime = new Date();
}
timer.prototype.stop = function () {
  this.endTime = new Date();
}
timer.prototype.alert = function () {
  if (this.startTime == null) {
    alert("Таймер не был запущен!");
    return null;
  }
  if (this.endTime == null) {
    this.stop();
  }
  $.writeln("Выполнено за " + String((this.endTime - this.startTime)/1000) + " секунд.")
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (i = 0; i < pdfFiles.length; i++) { 
          name.push(pdfFiles[i].displayName.toString().replace(/[.pdf]/g, "") + '\n');
          page1.push( 0 + '\n');
          page2.push( 0 + '\n');
          size.push('\n');
}

/*
function compareNumbers(a, b) {
  return a - b;
}
name.sort(compareNumbers);
*/


name=name.toString().replace(/[,]/g, "");
page1=page1.toString().replace(/[,]/g, "");
page2=page2.toString().replace(/[,]/g, "");
size=size.toString().replace(/[,]/g, "");


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":7,"orientation":"column","spacing":15,"alignChildren":["fill","top"]}},"item-1":{"id":1,"type":"EditText","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"EditText","parentId":8,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"EditText","parentId":7,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-6":{"id":6,"type":"DropDownList","parentId":5,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":4,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"Group","parentId":4,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-9":{"id":9,"type":"Group","parentId":4,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"StaticText","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"StaticText","parentId":8,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","top"],"alignment":null}},"item-15":{"id":15,"type":"Button","parentId":14,"style":{"enabled":true,"varName":null,"text":"Button","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Button","parentId":14,"style":{"enabled":true,"varName":null,"text":"Button","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"Checkbox","parentId":17,"style":{"enabled":true,"varName":null,"text":"Checkbox","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,5,13,6,4,9,11,1,8,12,2,7,10,3,17,18,14,15,16],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":0}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "LIFT Sorter"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["fill","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 10; 
    dialog.location =[20,40]
    

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Вид "; 

var dropdown1_array = typeArray ; 
var dropdown1 = group1.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
    dropdown1.selection = 0; 
var checkbox1 = group1.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "Только этикетка"; 
    //checkbox1.enabled = false;
// GROUP2
// ======
var group2 = dialog.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["fill","top"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// GROUP3
// ======
var group3 = group2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "column"; 
    group3.alignChildren = ["left","fill"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var statictext2 = group3.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Макет"; 


var edittext1 = group3.add('edittext {properties: {name: "edittext1", multiline: true, scrollable: true}}'); 
    edittext1.characters = 50;
    edittext1.text = name; 

// GROUP4
// ======
var group4 = group2.add("group", undefined, {name: "group4"}); 
    group4.orientation = "column"; 
    group4.alignChildren = ["left","fill"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext3 = group4.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "тираж"; 

var edittext2 = group4.add('edittext {properties: {name: "edittext2", multiline: true, scrollable: true}}'); 
    edittext2.text = page1; 
    edittext2.characters = 4;

// GROUP5
// ======
/*
var group5 = group2.add("group", undefined, {name: "group5"}); 
    group5.orientation = "column"; 
    group5.alignChildren = ["left","top"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext4 = group5.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "стр2"; 

var edittext3 = group5.add('edittext {properties: {name: "edittext3", multiline: true, scrollable: true}}'); 
    edittext3.text = page2; 
    edittext3.characters = 4;
  */  
// GROUP8
// ======
var group8 = group2.add("group", undefined, {name: "group8"}); 
    group8.orientation = "column"; 
    group8.alignChildren = ["left","fill"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

var statictext5 = group8.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext5.text = "формат"; 

var edittext4 = group8.add('edittext {properties: {name: "edittext4", multiline: true, scrollable: true}}'); 
    edittext4.text = size; 
    edittext4.characters = 8;

// GROUP6
// ======
var group6 = dialog.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 


// GROUP7
// ======
var group7 = dialog.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["right","top"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var button1 = group7.add("button", undefined,  "Старт",  {name: "ok"}); 

//=======
button1.onClick= function(){
    dialog.close ();
    if(label == true){
        runKey = false;
        }
   runKey =true;
    }

checkbox1.onClick= function(){
    label = true;
      if(label == true){
        label = false;
        }
            } 
dropdown1.onChange= function(){
               switch (this.selection.index){  
                    case 0 :  
                          type = typeArray[0];
                          typeColor = typeColorArray[0]; 
                          break;  
                    case 1 :  
                           type = typeArray[1];
                          typeColor = typeColorArray[1]; 
                          break;  
                    case 3 :  
                          type = typeArray[3];
                          typeColor = typeColorArray[3]; 
                          break;  
                    case 4 :  
                           type = typeArray[4];
                          typeColor = typeColorArray[4]; 
                          break;  
                    case 6 :  
                          type = typeArray[6];
                          typeColor = typeColorArray[6]; 
                          break;  
                    case 7 :  
                           type = typeArray[7];
                          typeColor = typeColorArray[7]; 
                          break;  
                    case 9 :  
                          type = typeArray[9];
                          typeColor = typeColorArray[9]; 
                          break;  
                    case 10 :  
                           type = typeArray[10];
                          typeColor = typeColorArray[10]; 
                          break;
                    case 11 :  
                          type = typeArray[11];
                          typeColor = typeColorArray[11]; 
                          break;  
                    case 13 :  
                           type = typeArray[13];
                          typeColor = typeColorArray[13]; 
                          break;     
                    case 14 :  
                          type = typeArray[14];
                          typeColor = typeColorArray[14]; 
                          break;                          

                }
            }
dialog.show();


var sortName = edittext1.text.split ("\n");
var sortPage1 = edittext2.text.split ("\n");
var sortSize = edittext4.text.split ("\n");    

if(runKey == true){
  var myTimer = new timer();
  myTimer.start();
    
    for(var j = 0; j < sortName.length-1; j++){
        getSizePDF (pdfFiles[j]);
        /*
        $.writeln ("файл " +j);
        $.writeln ("sortPage1 " +sortPage1[j]);
        $.writeln ("sortPage2 " +sortPage2[j]);
        */
        if (sortPage1[j]>0 ){
            pagesPDF=2;
                }
        myDocument = app.documents.add();
           
       myDocument.windows[0].minimize();
                with (myDocument.viewPreferences){
                horizontalMeasurementUnits = MeasurementUnits.millimeters;
                verticalMeasurementUnits = MeasurementUnits.millimeters;
                strokeMeasurementUnits = MeasurementUnits.points;
                   }
                    with(myDocument.textDefaults){
                            pointSize = 36;
                            }
                 with(myDocument.documentPreferences){
                    masterTextFrame = false; // - не создаем. Если masterTextFrame = true, то он будет создаваться
                    facingPages = false; // при true документ будет создан разворотами, при false - из отдельных страниц
                    pageHeight = hPDF;
                    pageWidth = wPDF;
                    pageOrientation = PageOrientation.portrait; // или pageOrientation = PageOrientation.portrait;
                    
                    pagesPerDocument = pagesPDF;
                    startPageNumber = 1; // Этот параметр лежит в пределах 1-999999.
                    intent = DocumentIntentOptions.PRINT_INTENT; 
                   } 

        for( var a= 2; a < pagesPDF+1 ; a++){
            app.pdfPlacePreferences.pageNumber = a;
            myDocument.pages[a-1].place(File(pdfFiles[j]), [0,0]); 
            }
         myDocument.colors.add({name : "BG", colorValue : typeColor , model : ColorModel.PROCESS ,space : ColorSpace.CMYK });

                    var myTextFrame = myDocument.pages[0].textFrames.add();
                    myTextFrame.geometricBounds = ["5mm", "5mm", hPDF - 5 +"mm",  wPDF - 5 +"mm"];
                    myTextFrame.name  = "nameFrame";
                    
                    var allPages = +sortPage1[j] 
                    
                    
                    if(sortSize[j].length < 2){
                        sortSize[j] = "A3"
                        }
                    myTextFrame.contents  = "Вид - " + type + "\n"+ "№"+ sortName[j] + "\n"+"Тираж "+allPages+ " шт\n"+"Формат "+ sortSize[j];
                    myTextFrame.fillColor = myDocument.swatches.item("BG");
                    myTextFrame.fillTint = 100;
                    myTextFrame.textFramePreferences.insetSpacing = ["50mm","50mm","50mm","50mm"];
                    
                   
                 if(sortPage1[j]>0 ){
                     for (var b =0; b < sortPage1[j]; b++){
                         outputArray.push (2);
                         }
                     }  
                 


                 
                 var ww = outputArray.toString();
                pdfExportSet (ww);
                var saveFile = new File(File(tmpFolder +"/"+ sortName[j] +".pdf"));  
                myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
                outputArray=[1];      
                myDocument.close(SaveOptions.no);

        }
        myTimer.stop();
        myTimer.alert();
     alert ("Скрипт закончил работу.", "Готово!", )

    }

if(label == true){
    var labelDoc = app.documents.add();
    with (labelDoc.viewPreferences){
        horizontalMeasurementUnits = MeasurementUnits.millimeters;
        verticalMeasurementUnits = MeasurementUnits.millimeters;
        strokeMeasurementUnits = MeasurementUnits.points;
        }
    with(labelDoc.documentPreferences){
        masterTextFrame = false; // - не создаем. Если masterTextFrame = true, то он будет создаваться
        facingPages = false; 
        pageWidth =  320 + "mm";
        pageHeight = 450 + "mm";
        pagesPerDocument = 1;
        startPageNumber = 1; 
        intent = DocumentIntentOptions.PRINT_INTENT; 
        
        } 
    with(labelDoc.textDefaults){
        pointSize = 36;
        }
        labelDoc.colors.add({name : "BG", colorValue : typeColor , model : ColorModel.PROCESS ,space : ColorSpace.CMYK });
        for (i = 0; i < pdfFiles.length; i++) { 
                    var lastPages = labelDoc.pages.add(LocationOptions.AT_END);
                 
                    var myTextFrame = lastPages.textFrames.add();
                    myTextFrame.geometricBounds = ["5mm", "5mm", hPDF - 5 +"mm",  wPDF - 5 +"mm"];
                    myTextFrame.name  = "nameFrame";
                    

                    var allPages = +sortPage1[i]
                    
                    
                    if(sortSize[i].length < 2){
                        sortSize[i] = "A3"
                        }
                    myTextFrame.contents  ="Вид - " + type + "\n"+ "№" + sortName[i] + "\n"+"Тираж "+allPages+ " шт\n"+"Формат "+ sortSize[i];
                    myTextFrame.fillColor = labelDoc.swatches.item("BG");
                    myTextFrame.fillTint = 100;
                    myTextFrame.textFramePreferences.insetSpacing = ["50mm","50mm","50mm","50mm"];
            }
        labelDoc.pages[0].remove();
        create_pdf (tmpFolder, "label", true);
}


function create_pdf (path_PDF_folder, name_PDF, viewPDF){
     var saveFile =  new File(path_PDF_folder +"/"+name_PDF+".pdf");
     var myDocument = app.activeDocument;
       with(app.pdfExportPreferences){
           useDocumentBleedWithPDF = true;
           pageRange = PageRange.allPages;
           }
     myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
     if(viewPDF == true){
         saveFile.execute();
         }
     myDocument.close(SaveOptions.NO);    
}

function getSizePDF(myPDFFile){
myDocument = app.documents.add();
    myDocument.windows[0].minimize();
  with (myDocument.viewPreferences){
            horizontalMeasurementUnits = MeasurementUnits.millimeters;
            verticalMeasurementUnits = MeasurementUnits.millimeters;
           }
myPage = myDocument.pages.item(0);  
myPlacePDF(myDocument, myPage, myPDFFile);  
   
hPDF = (myDocument.allGraphics[0].geometricBounds[2]) - (myDocument.allGraphics[0].geometricBounds[0]);
wPDF = (myDocument.allGraphics[0].geometricBounds[3]) - (myDocument.allGraphics[0].geometricBounds[1]);
 
wPDF= Math.round(wPDF);
hPDF = Math.round(hPDF);

  myDocument.close(SaveOptions.no);
function myPlacePDF(myDocument, myPage, myPDFFile){  
	var myPDFPage =1;
	app.pdfPlacePreferences.pdfCrop = PDFCrop.cropPDF;
	var myCounter = 1;
	var myBreak = false;
        myPDFPage = myPage.place(File(myPDFFile), [0,0])[0];
}
}
function getPagesPDF(myPDFFile){  
var myDocument = app.documents.add();
myDocument.windows[0].minimize();
var myPage = myDocument.pages.item(0); 
var myPDFPage;
	app.pdfPlacePreferences.pdfCrop = PDFCrop.cropMedia;
    

 
function pageCount(pagesPDFRange, v,startPageNumberpagesPDF){
var graphicFrame = app.selection[0];  
var pdfFile = myPDFFile;
startPageNumberpagesPDF = startPageNumberpagesPDF; 
var doc = app.documents[0];  


  
for(var n=startPageNumberpagesPDF+1;n<=startPageNumberpagesPDF+pagesPDFRange; n=n+v)  
{  

    var tempFrame = doc.rectangles.add({geometricBounds : [0,0,100,100]});  
    app.pdfPlacePreferences.pageNumber = n;   
    tempFrame.place(pdfFile,false,undefined);  
    var currentPageNumber = tempFrame.getElements()[0].graphics[0].pdfAttributes.pageNumber;  
    tempFrame.remove(); 
    if(currentPageNumber == 1)  
    {  
        //$.writeln( "Number of pages in PDF:"+"\t"+(n-v) ); 
    pagesPDF = n-v;
        break;  
    };  
  

    if(n==startPageNumberpagesPDF+pagesPDFRange)  
    {  
        //$.writeln( "End of pagesPDF range reached. Last pagesPDFed page number:"+"\t"+(n) );  
    pagesPDF = n;
    };  

};
}
try{
    pageCount (1500, 100, 1);
    pageCount (1500, 10, pagesPDF);
        }
catch(e){
    //pageCount (1500, 10, pagesPDF);
    pagesPDF = 1;
    }
finally{
    pageCount (1500, 1, pagesPDF);
    myDocument.close(SaveOptions.no);
    }


}

function pdfExportSet (PageRange){
            with(app.pdfExportPreferences){
    	pageRange = PageRange;
    	acrobatCompatibility = AcrobatCompatibility.acrobat8;
    	exportGuidesAndGrids = false;
    	exportLayers = false;
    	exportNonPrintingObjects = false;
    	exportReaderSpreads = false;
    	generateThumbnails = false;
    	try{
    		ignoreSpreadOverrides = false;
    	}
    	catch(e){}
    	includeBookmarks = false;
    	includeHyperlinks = false;
    	includeICCProfiles = false;
    	includeSlugWithPDF = false;
    	includeStructure = false;
    	interactiveElementsOption = InteractiveElementsOptions.doNotInclude;
    	subsetFontsBelow = 100;
        /*
    	colorBitmapCompression = BitmapCompression.zip;
    	colorBitmapQuality = CompressionQuality.eightBit;
    	colorBitmapSampling = Sampling.none;
        */
        colorBitmapCompression=  BitmapCompression.AUTO_COMPRESSION;
        colorBitmapSampling= Sampling.BICUBIC_DOWNSAMPLE;
        colorBitmapSamplingDPI = 280;
        colorTileSize= 128;
    	grayscaleBitmapCompression = BitmapCompression.zip;
    	grayscaleBitmapQuality = CompressionQuality.eightBit;
    	grayscaleBitmapSampling = Sampling.none;
    	monochromeBitmapCompression = BitmapCompression.zip;
    	monochromeBitmapSampling = Sampling.none;
    	compressionType = PDFCompressionType.COMPRESS_OBJECTS;
    	compressTextAndLineArt = true;
		cropImagesToFrames = true;
		optimizePDF = false;
    	colorBars = false;
    	colorTileSize = 128;
    	grayTileSize = 128;
    	cropMarks = false;
    	omitBitmaps = false;
    	omitEPS = false;
    	omitPDF = false;
    	pageInformationMarks = false;
    	pageMarksOffset = "12 pt";
    	pdfColorSpace = PDFColorSpace.unchangedColorSpace;
         includeICCProfiles = ICCProfiles.INCLUDE_NONE;
    	pdfMarkType = 1147563124;
    	printerMarkWeight = PDFMarkWeight.p125pt;
    	registrationMarks = false;
    	try{
    		simulateOverprint = false;
    	}
    	catch(e){}
    	useDocumentBleedWithPDF = true;
    	viewPDF = false;
    }
    
}
