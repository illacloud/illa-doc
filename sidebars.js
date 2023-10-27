// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'build_apps',
      link: {
        type: 'doc',
        id: "run-script"
      },
      items: [
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["run-script"]
        },
      ]
    },
    {
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["ai-agent"]
    },
  ],
};

module.exports = sidebars;
