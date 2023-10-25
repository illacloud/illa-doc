// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'build_apps',
      link: {
        type: 'doc',
        id: "form"
      },
      items: [
        {
          type: 'category',
          label: 'components',
          items: [
            {
              type: 'category',
              label: 'text_inputs',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'Number_inputs',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'select_inputs',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'date_time_input',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'special_input',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'container_and_form',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'presentation',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'data_presentation',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'navigation',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'media_presentation',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'special_presentation',
              items: ["text"]
            },
          ]
        },
        {
          type: 'category',
          label: 'resources',
          items: [
            {
              type: 'category',
              label: 'overview',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'allow_access_from_ILLA',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'database',
              items: ["text"]
            },
            {
              type: 'category',
              label: 'apis',
              items: ["text"]
            },
          ]
        },
        "text-area-input",
        {
          type: 'category',
          label: 'global',
          items: ["text"]
        },
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["text"]
        },
      ]
    },
    {
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["text"]
    },
    {
      type: 'category',
      label: 'teams_and_users',
      items: ["text"]
    },
    {
      type: 'category',
      label: 'changelog',
      items: ["text"]
    },
    {
      type: 'category',
      label: 'test',
      items: ["text-area-input"]
    },
    "tidb",
    "time-picker",
    "time-range",
  ],
};

module.exports = sidebars;
