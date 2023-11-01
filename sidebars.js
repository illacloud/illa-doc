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
          items: ["bar-progress", "button", "cascader", "circle-progress", "container", "date", "date-range", "date-time", "divider", "editable-text", "event-calendar", "form", "icon", "image", "input", "list", "menu", "modal", "multi-select", "number-input", "page", "pdf", "radio-button", "radio-group", "rate", "select", "statistics", "switch", "table", "tabs", "text", "text-area-input", "time-picker", "time-range", "timeline", "upload", "video"]
        },
        {
          type: 'category',
          label: 'resources',
          items: ["airtable", "amazons3", "appwrite", "clickhouse", "elastic-search", "firebase", "hugging-face-api", "hugging-face-endpoint", "hydra", "mariadb", "microsoft-sql", "mongodb", "mysql", "neon", "oracledb", "postgresql", "redis", "restapi", "snowflake", "supabase", "tidb", "transformer", "upstash"]
        },
        {
          type: 'category',
          label: 'JavaScript_and_Event_handler',
          items: ["run-script", "event-handler"]
        }
      ]
    },
    {
      type: 'category',
      label: 'ILLA_with_ai',
      items: ["ai-agent"]
    },"self-hosted-deployment",
    {
      type: 'category',
      label: 'illa_policy',
      items: ["privacy-policy", "terms-of-service"]
    }
  ],
};

module.exports = sidebars;
