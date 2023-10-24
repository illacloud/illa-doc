// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'build_apps',
      link: {
        type: 'doc',
        id: "about-illa"
      },
      items: [
        {
          type: 'category',
          label: 'components',
          items: [
            {
              type: 'category',
              label: 'text_inputs',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'Number_inputs',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'select_inputs',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'date_time_input',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'special_input',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'container_and_form',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'presentation',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'data_presentation',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'navigation',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'media_presentation',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'special_presentation',
              items: ["airtable"]
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
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'allow_access_from_ILLA',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'database',
              items: ["airtable"]
            },
            {
              type: 'category',
              label: 'apis',
              items: ["airtable"]
            },
          ]
        },
        "api-authentication",
        {
          type: 'category',
          label: 'global',
          items: ["airtable"]
        },
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["airtable"]
        },
      ]
    },
    {
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["airtable"]
    },
    {
      type: 'category',
      label: 'teams_and_users',
      items: ["airtable"]
    },
    "api-authentication",
    "app-editor",
    "amazons3"
  ],
};

module.exports = sidebars;
