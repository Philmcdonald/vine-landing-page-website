// data.js
import desktop from '../assets/desktop.svg'
import motor from '../assets/motor.svg'
import yatch from '../assets/yatch.svg'
import tablet from '../assets/tablet.svg'

export const card = [
  {
    title: 'Solutions providers',
    content: [
      ' Whether you sell or install EV chargers, manage fleets, or run a charging network, Vine Mobility gives you the tools to scale with ease. Explore our ',
      { text: 'enterprise software', style: { color: '#8fc03f' } },
    ],
  },
  // {
  //   title: 'Site managers',
  //   content: [
  //     'If your sell or install EV Chargers, operate a charging network or manage a large fleet, learn about our ',
  //     { text: 'enterprise software', style: { color: 'blue' } },
  //     ' and ',
  //     { text: 'white-label solutions', style: { color: 'blue' } },
  //   ],
  // },
  {
    title: 'EV drivers',
    content: [
      'Download the VineCharge app to find chargers, scan to start a session, and pay seamlessly, all from your phone.',
    ],
  },
]

export const platform = [
  {
    src: desktop,
    title: 'Full Stack Solution',
    content:
      'We help solutions providers, network operators, and fleets pick the right hardware and maintain large-scale EV charging operations.',
  },
  {
    src: motor,
    title: 'Open & interoperable',
    content:
      "Vine Mobility has verified 15+ OCPP chargers from over a dozen  manufacturers. We're compatible with any OCPP hardware.",
  },
  {
    src: tablet,
    title: 'Contant Upgrades',
    content:
      'We release improvements every year to help you stay ahead of the rapidly evolving EV industry. Cloud-based means zero downtime.',
  },
  {
    src: yatch,
    title: ' Future-proofed',
    content:
      "Vine Mobility's cutting-edge microservices architecture makes our CSMS the most scalable solution on the market.",
  },
]

export const testimony = [
  {
    name: 'Jack Bauwer',
    title: 'CEO of EV Charger',
    content: `Obtaining CTEP certification [with Vine Mobility] for our DirectPowerPS 360 DC fast chargers is a significant achievement. It's a testament to our commitment to delivering cutting-edge,
                compliant charging solutions.`,
  },
  {
    name: 'Paul Ryan',
    title: 'CEO of EV Charger',
    content: `Vine Mobility has been a people driven business from day one. It's been the same mission to essentially put customers first. That's what's been really key with the success of Vine Mobility. Investors have invested in Vine Mobility and you've have built up a huge reputation in space. It's all because of people."`,
  },
  {
    name: 'Paul Ryan',
    title: 'CEO of EV Charger',
    content: `Obtaining CTEP certification [with Vine Mobility] for our
                DirectPowerPS 360 DC fast chargers is a significant achievement.
                It's a testament to our commitment to delivering cutting-edge,
                compliant charging solutions.`,
  },
]
