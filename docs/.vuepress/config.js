module.exports = {
  title: "Tiny Node Docs",
  description: "Documentation website for tiny node",
  base: "/tiny-node-docs/",
  themeConfig: {
    navbar: true,
    nav: [
      { text: "GitHub", link: "https://github.com/thunderBiscuit/tiny-node-docs"},
      { text: "Website", link: "https://www.thunderbiscuit.com/"}
    ],
    logo: "/images/logo.png",
    sidebarDepth: 0,
    sidebar: [
      {
        collapsable: false,
        title: "Getting Started",
        children: [
          ["/intro/introduction", 'Introduction'],
          ["/intro/getting-started", 'Getting Started'],
        ]
      },
      {
        collapsable: true,
        title: "Bitcoin",
        children: [
          ["/bitcoin/running-lightning", 'Running Lightning'],
          ["/bitcoin/troubleshooting", 'Troubleshooting'],
        ]
      },
      {
        collapsable: true,
        title: "Remote Access",
        children: [
          ["/remote-access/connect-tor", 'Connect Via Tor'],
        ]
      },
    ]
  }
}
