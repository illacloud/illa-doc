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
          items: ["bar-progress", "button", "cascader", "circle-progress", "container", "data-grid", "date", "date-range", "date-time", "divider", "editable-text", "event-calendar", "form", "icon", "image", "input", "list", "grid-list", "menu", "modal", "multi-select", "number-input", "page", "pdf", "radio-button", "radio-group", "rate", "select", "statistics", "switch", "table", "tabs", "text", "text-area-input", "time-picker", "time-range", "timeline", "upload", "video"]
        },
        {
          type: 'category',
          label: 'resources',
          items: ["add-illa-ip-to-your-allow-list", "airtable", "amazons3", "appwrite", "clickhouse", "elastic-search", "firebase", "hugging-face-api", "hugging-face-endpoint", "hydra", "mariadb", "microsoft-sql", "mongodb", "mysql", "neon", "oracledb", "postgresql", "redis", "restapi", "snowflake", "supabase", "tidb", "transformer", "upstash"]
        },
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["run-script", "event-handler"]
        }
      ]
    },"server-side-pagination","self-hosted-deployment",
    {
      type: 'category',
      label: 'branding',
      items: ["custom-domain"]
    },{
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["ai-agent"]
    },{
      type: 'category',
      label: 'illa_flow',
      items: ["illa-flow-introduction", "illa-flow-webhook", "illa-flow-response"]
    },
    {
      type: 'category',
      label: 'changelog',
      items: ["4-8-2","4-8-1", "4-8", "4-5", "4-4", "4-3-6", "4-3","4-2","4-1","4-0", "3-5", "3-4", "3-3"]
    },
    {
      type: 'category',
      label: 'illa_policy',
      items: ["privacy-policy", "terms-of-service"]
    }
  ],
};

module.exports = sidebars;
