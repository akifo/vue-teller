let log = () => {}
let warn = () => {}

if (process.env.NODE_ENV !== 'production') {
  log = console.log.bind(console, '%cVue-teller: Log:    ', 'color: #26a65b') // green
  warn = console.log.bind(console, '%cVue-teller: Wran:   ', 'color: #e87e04') // orange
}

export { log, warn }
