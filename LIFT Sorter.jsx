#target indesign
#targetengine "main"

var pdfFiles = Folder.selectDialog().getFiles( /\.pdf$/i );
if(pdfFiles == "" || pdfFiles == null)  
  exit(0);
var name = [];
var page1= [];
var page2 =[];
var size =[];
var label = false;
var runKey = false;

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


for (i = 0; i < pdfFiles.length; i++) { 
          name.push(pdfFiles[i].displayName.toString().replace(/[.pdf]/g, "") + '\n');
          page1.push( 0 + '\n');
          page2.push( 0 + '\n');
          size.push('\n');
}


function compareNumbers(a, b) {
  return a - b;
}
name.sort(compareNumbers);



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
    group2.alignChildren = ["fill","fill"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// GROUP3
// ======
var group3 = group2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "column"; 
    group3.alignChildren = ["left","top"]; 
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
    group4.alignChildren = ["left","top"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext3 = group4.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "стр 1"; 

var edittext2 = group4.add('edittext {properties: {name: "edittext2", multiline: true, scrollable: true}}'); 
    edittext2.text = page1; 
    edittext2.characters = 4;

// GROUP5
// ======
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
    
// GROUP8
// ======
var group8 = group2.add("group", undefined, {name: "group8"}); 
    group8.orientation = "column"; 
    group8.alignChildren = ["left","top"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

var statictext5 = group8.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext5.text = "формат"; 

var edittext4 = group8.add('edittext {properties: {name: "edittext3", multiline: true, scrollable: true}}'); 
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
    }

checkbox1.onClick= function(){
    label = true;
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
var sortPage2 = edittext3.text.split ("\n");
var sortSize = edittext4.text.split ("\n");    
if(){}

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
                    myTextFrame.geometricBounds = ["0mm", "0mm", "450mm", "320mm"];
                    myTextFrame.name  = "nameFrame";
                    
                    if(sortPage2[i]==""){
                        sortPage2[i] = 0;
                        }
                    var allPages = +sortPage1[i] + +sortPage2[i];
                    
                    
                    if(sortSize[i].length < 2){
                        sortSize[i] = "A3"
                        }
                    myTextFrame.contents  = type + "\n"+ sortName[i] + "\n"+"Тираж "+allPages+ " шт\n"+"Форамат "+ sortSize[i];
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