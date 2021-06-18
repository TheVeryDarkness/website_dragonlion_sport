declare const resultTreeJSON: HTMLTextAreaElement;
declare const nodeProperties: HTMLUListElement;
import {
 dataNode,
 dataTree,
 keyToBeFilled,
 nameToBeFilled,
 nodes,
 tree,
} from "./infoTree";
import { s } from "./select";
export { addProperty, showLastSpecified, generate, showJSON };

// Current specified node to be modifyied
var specified: dataNode;
//
var specifiedNodeIndex = 0;
var totalLineCount = 0;

function while_exist<T, V>(value: T | undefined, f: (_: T) => V) {
 if (!value) console.error("Why is it deleted?");
 else f(value);
}

function count(obj: any) {
 if (obj === specified) specifiedNodeIndex = totalLineCount;
 ++totalLineCount;
 if (typeof obj == "object") {
  // Otherwise should not be iterated
  for (const key in obj) {
   const element = obj[key];
   count(element);
  }
  if (!(obj instanceof Array && obj.length == 0)) ++totalLineCount;
 }
 return obj;
}
function relocateJSON() {
 specifiedNodeIndex = totalLineCount = 0;
 count(tree);
 {
  const area = resultTreeJSON;
  area.scrollTop = (area.scrollHeight / totalLineCount) * specifiedNodeIndex;
 }
 // console.log(String(specifiedNodeIndex) + "/" + String(totalLineCount));
}
function changeSpecifiedNode(newNode: dataNode) {
 specified = newNode;
 relocateJSON();
}
// resultTreeJSON is an element node
function showJSON() {
 resultTreeJSON.textContent = JSON.stringify(tree, null, 1);
 relocateJSON();
}
function addProperty(event) {
 if (!specified.value) {
  alert("Choose a named node first.");
 } else if (specified[keyToBeFilled] === undefined) {
  if (confirm("Sure to add a property?")) {
   specified[keyToBeFilled] = "";
   // showNode();
   const form = nodeProperties;
   form.appendChild(
    renderPropertyToLi(keyToBeFilled, specified[keyToBeFilled], specified)
   );
   showJSON();
  }
 } else alert("Fill empty-key property first.");
}
function renderPropertyToDocumentNode<T extends keyof dataNode>(
 key: T,
 element: dataNode[T],
 node: dataNode
) {
 switch (key) {
  case "sub":
   var arr = [];
   for (const iterator of element) arr.push(iterator.value);
   var text = document.createElement("div");
   text.textContent = "[" + String(arr) + "]";
   text.onclick = (event) => {
    if (confirm("Sure to add a node?")) {
     var newNode = { value: "" };
     specified.sub.push(newNode);
     showNode(newNode);
     showJSON();
    }
   };
   return text;
  case "range":
   var form = document.createElement("form");
   // Standarize to array
   if (!(element instanceof Array)) {
    node[key] = [0, 0];
    console.error("Node '", node.value, "' should has a array range.");
    console.error(
     "But it is ",
     typeof element,
     "'",
     JSON.stringify(element),
     "'."
    );
    console.error(element);
   } else if (element.length == 2) {
   } else {
    console.error(
     "Node '",
     node.value,
     "' should has a range with a length 2."
    );
    console.error("But it has a value '", JSON.stringify(element), "'.");
    if (element.length > 2) node[key] = element.slice(0, 2);
    else if (element.length == 1) node[key] = [element[0], element[0]];
    else node[key] = [0, 0];
   }
   element = node[key];

   var input0 = document.createElement("input"); // begin
   input0.value = element[0];
   input0.onchange = (event) => {
    while_exist(specified[key], (range) => {
     range[0] = (event.target as HTMLInputElement).value;
    });
    showJSON();
   };
   var input1 = document.createElement("input"); // end
   input1.value = element[1];
   input1.onchange = (event) => {
    while_exist(specified[key], (range) => {
     range[1] = (event.target as HTMLInputElement).value;
    });
    showJSON();
   };
   form.appendChild(input0);
   form.appendChild(input1);
   return form;
  case "comment":
   const renderAComment = function (value, index: number) {
    var set = document.createElement("div");
    set.className = "fieldset";

    var name = document.createElement("input");
    name.value = value.name;
    name.onchange = (event) => {
     while_exist(specified.comment, (comment) => {
      comment[index].name = (event.target as HTMLInputElement).value;
     });
     showJSON();
    };
    name.ondblclick = (event) => {
     if (confirm("Sure to add a comment?")) {
      var newComment = { name: nameToBeFilled, content: "" };
      const comment = specified.comment;
      if (!comment) console.error("Why is it deleted?");
      else comment.push(newComment);
      showJSON();
      const form = (event.target as HTMLInputElement).parentNode
       ?.parentNode as HTMLFormElement;
      form.appendChild(renderAComment(newComment, form.childNodes.length));
     }
    };

    var content = document.createElement("input");
    content.value = value.content;
    content.onchange = (event) => {
     while_exist(specified.comment, (comment) => {
      comment[index].content = (event.target as HTMLInputElement).value;
     });
     showJSON();
    };

    set.appendChild(name);
    set.appendChild(content);
    return set;
   };
   var form = document.createElement("form");
   element.forEach((value, index) => {
    form.appendChild(renderAComment(value, index));
   });
   return form;
  default:
   if (typeof element != "string")
    console.error(
     "It's recommended to provide another tool for non-string preperty '",
     key,
     "'."
    );
   var input = document.createElement("input");
   input.value = element;
   input.onchange = (event) => {
    specified[key] = event.target.value;
    showJSON();
   };
   return input;
 }
}
function renderPropertyToLi(key: keyof dataNode, element, node: dataNode) {
 const li = document.createElement("li");

 const p = document.createElement("p");
 p.className = "sub";

 var label;
 if (key != keyToBeFilled) {
  label = document.createElement("label");
  label.innerText = key;
  label.htmlFor = "display-li-" + nodeProperties.childNodes.length;
 } else {
  label = document.createElement("input");
  label.value = key;
  label.onchange = (event) => {
   specified[event.target.value] = specified[keyToBeFilled];
   delete specified[keyToBeFilled];
   showNode(specified);
   showJSON();
  };
 }

 var box = renderPropertyToDocumentNode(key, element, node);
 if (!box) {
  console.error("Illegal value.");
  return;
 }
 box.id = "display-li-" + nodeProperties.childNodes.length;

 li.onclick = (event) => {
  const target = event.target as HTMLLIElement;
  if (target.nodeName == "LI" && confirm("Sure to remove the property?")) {
   delete specified[key];
   // showNode();
   target.remove();
   showJSON();
  }
 };
 p.appendChild(box);
 li.appendChild(label);
 li.appendChild(p);
 return li;
}
function showNode(node: dataNode) {
 if (node == specified) console.log("This could be optimized for efficiency.");
 changeSpecifiedNode(node);
 const ul = document.getElementById("nodeProperties");
 if (!ul) {
  console.error("No display target.");
  return;
 }
 while (ul.childNodes.length > 0) {
  ul.removeChild(ul.lastChild as ChildNode);
 }
 let key: keyof dataNode;
 for (key in node) {
  const element = node[key];
  ul.appendChild(renderPropertyToLi(key, element, node));
 }
}
function lastSpecifiedNode(end = s.length): dataNode | {} {
 if (s.length < end) {
  console.error("Out of Range");
  end = s.length;
 }
 var res = -1;
 for (let index = 0; index < end; index++) {
  const element = s[index];
  if (element.selectedIndex > 0) res = index;
 }
 if (res >= 0) return nodes[res][s[res].selectedIndex];
 else return {};
}
function showLastSpecified(end = s.length) {
 showNode(lastSpecifiedNode(end));
}
function makeFile(name: string, text: string) {
 var element = document.createElement("a");
 element.setAttribute(
  "href",
  "data:text/plain;charset=utf-8," + encodeURIComponent(text)
 );
 element.setAttribute("download", name);

 element.style.display = "none";
 document.body.appendChild(element);

 element.click();

 document.body.removeChild(element);
}
function generate() {
 if (
  process.env.NODE_ENV == "development" &&
  resultTreeJSON.textContent !== JSON.stringify(tree, null, 1)
 ) {
  console.error("Data in textarea is modified somewhere.");
  console.log(resultTreeJSON.textContent);
  console.log(JSON.stringify(tree, null, 1));
 }
 showJSON();
 if (resultTreeJSON.textContent)
  makeFile("result.json", resultTreeJSON.textContent);
 else console.log("Not json input.");
}
