const document = {
    childNodes: [
      {
        nodeName: "html",
        childNodes: [
          {
            nodeName: "head",
            childNodes: [
              {
                nodeName: "script",
                innerText: "console.log('hi');",
              },
            ],
          },
          {
            nodeName: "body",
            childNodes: [
              {
                nodeName: "ul",
                childNodes: [
                  {
                    nodeName: "li",
                    childNodes: [
                      {
                        nodeName: "b",
                        innerText: "Home",
                      },
                    ],
                  },
                  {
                    nodeName: "li",
                    innerText: "Blog",
                  },
                  {
                    nodeName: "li",
                    innerText: "About",
                  },
                ],
              },
              {
                nodeName: "div",
                childNodes: [
                  {
                    nodeName: "h1",
                    innerText: "My Blog",
                  },
                  {
                    nodeName: "p",
                    innerText: "Welcome to my blog!",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const constructorDOM = (node) => {
    if (node.innerText) {
        return node.innerText;
    }
    let html = '';
    for (const childnode of node.childNodes) {
        html += `\n<${childnode.nodeName}>`; // 
        html += `\n${constructorDOM(childnode)}`; // 
        html += `\n</${childnode.nodeName}>`; //
    }

    return html
  }

  console.log(constructorDOM(document))