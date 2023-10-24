// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'build_apps',
      items: [
        {
          type: 'category',
          label: 'components',
          items: [
            {
              type: 'category',
              label: 'text_inputs',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'Number_inputs',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'select_inputs',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'date_time_input',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'special_input',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'container_and_form',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'presentation',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'data_presentation',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'navigation',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'media_presentation',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'special_presentation',
              items: ["appwrite"]
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
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'allow_access_from_ILLA',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'database',
              items: ["appwrite"]
            },
            {
              type: 'category',
              label: 'apis',
              items: ["appwrite"]
            },
          ]
        },
        {
          type: 'category',
          label: 'server_side_pagination',
          items: ["appwrite"]
        },
        {
          type: 'category',
          label: 'global',
          items: ["appwrite"]
        },
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["appwrite"]
        },
      ]
    },
    {
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["appwrite"]
    },
    {
      type: 'category',
      label: 'teams_and_users',
      items: ["appwrite"]
    },
    "chart",
    "input",
    "amazons3"
  ],
};

module.exports = sidebars;
