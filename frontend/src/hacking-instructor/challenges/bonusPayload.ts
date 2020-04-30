/*
 * Copyright (c) 2014-2020 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

import {
  waitForInputToHaveValue,
  waitForElementsInnerHtmlToBe,
  waitInMs
} from '../helpers/helpers'
import { ChallengeInstruction } from '../'

export const BonusPayloadInstruction: ChallengeInstruction = {
  name: 'Bonus Payload',
  hints: [
    {
      text:
        'Assuming you did the **DOM XSS** tutorial already, this one just uses a funnier payload on the _Search_ field.',
      fixture: '#searchQuery',
      resolved: waitInMs(8000) // TODO Add check if "DOM XSS" is solved and if not recommend doing that first
    },
    {
      text: 'Enter or paste this payload into the _Search_ field: <code>&lt;iframe src=&quot;https://player.vimeo.com/video/411989296?autoplay=1&amp;loop=1&amp;autopause=0&quot; width=&quot;640&quot; height=&quot;360&quot; frameborder=&quot;0&quot; allow=&quot;autoplay; fullscreen&quot; allowfullscreen&gt;&lt;/iframe&gt;</code>.',
      fixture: '#searchQuery',
      unskippable: true,
      resolved: waitForInputToHaveValue('#searchQuery input', '<iframe src="https://player.vimeo.com/video/411989296?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>')
    },
    {
      text: 'Make sure your speaker volume is cranked up. Then hit enter.',
      fixture: '#searchQuery',
      unskippable: true,
      resolved: waitForElementsInnerHtmlToBe('#searchValue', '<iframe src="https://player.vimeo.com/video/411989296?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>')
    },
    {
      text:
        '🎉 Congratulations and enjoy the music!',
      fixture: '.noResult',
      resolved: waitInMs(5000)
    }
  ]
}
