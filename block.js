import { decorate as decorateTestaccordion } from './blocks/test-accordion/test-accordion.js';

window.hlx.blocks.set('accordion', decorateTestaccordion);

import { decorate as decoratetest } from './blocks/test/test.js';

window.hlx.blocks.set('test', decoratetest);

[
  {
    "id": "test",
    "label": "Test Block",
    "fields": [
      {
        "component": "text",
        "name": "div:nth-child(1)",
        "label": "Title"
      },
      {
        "component": "text",
        "name": "div:nth-child(2)",
        "label": "Description"
      },
      {
        "component": "reference",
        "name": "div:nth-child(3)>img[src]",
        "label": "Image",
        "multi": false
      },
      {
        "component": "text",
        "name": "div:nth-child(3)>img[alt]",
        "label": "Image Alt Text"
      }
    ]
  }
]
