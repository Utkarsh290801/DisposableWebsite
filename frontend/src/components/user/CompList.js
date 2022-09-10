const compList = [
    ...[1, 2, 3, 4, 5, 6].map((num) => ({
      name: "Heading " + num,
      classes: ["h" + num],
      tag: "p",
      content: "Heading " + num,
    })),
    {
      name: "Text",
      classes: [],
      tag: "p",
      content: "Some Text",
    },
    {
      name: "Button",
      classes: ["btn", "btn-primary"],
      tag: "button",
      content: "Button!",
    },
    {
      name: "Image",
      classes: ["img-fluid"],
      tag: "img",
      src: "placeholder.png",
      content: "",
    },
    {
      name: "Card",
      classes: ["card"],
      tag: "div",
      children: [
        {
          name: "Card Header",
          classes: ["card-header"],
          tag: "div",
          children: [
            {
              name: "Text",
              classes: ["h3", "text-muted"],
              tag: "p",
              content: "Card Header",
            },
          ],
        },
        {
          name: "Card Body",
          classes: ["card-body"],
          tag: "div",
          content: "Body Text",
        },
        {
          name: "Card Footer",
          classes: ["card-footer"],
          tag: "div",
          children: [
            {
              name: "Text",
              classes: ["h4", "text-muted"],
              tag: "p",
              content: "Card Footer",
            },
          ],
        },
      ],
    },
    {
      name: "Link",
      classes: ["btn", "btn-link"],
      tag: "a",
      href: "https://google.com",
      content: "Link Text",
    },
  ];
  
  export default compList;
  