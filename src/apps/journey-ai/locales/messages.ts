import { defineMessages, MessageDescriptor } from 'react-intl';

const msgs: Record<string, MessageDescriptor> = {
  'home.title': { defaultMessage: 'The AI Ladder', id: 'ip/VoP' },
  'home.content': {
    defaultMessage:
      'Explore our prescriptive approach to help you accelerate your journey to AI',
    id: 'msTSQG',
  },
  'home.links.0.text': {
    defaultMessage: 'Read the Forrester report',
    id: 'AJeehk',
  },
  'home.links.0.href': {
    defaultMessage: 'https://www.ibm.com/account/reg/signup?formid:urx-43540',
    id: 'hyu7re',
  },
  'home.links.1.text': {
    defaultMessage: 'Read the O’Reilly book (PDF, 1.1 MB)',
    id: 'YfxBXY',
  },
  'home.links.1.href': {
    defaultMessage: 'https://www.ibm.com/downloads/cas/O1VADKY2',
    id: 'z+cLUB',
  },
  'scene.0.title': { defaultMessage: 'Infuse', id: '3B0Q6u' },
  'scene.0.content': {
    defaultMessage: 'Operationalize AI throughout the business',
    id: 'eBdFtS',
  },
  'scene.0.links.0.text': { defaultMessage: 'Read the report', id: 'Toy1gi' },
  'scene.0.links.0.href': {
    defaultMessage: 'https://www.ibm.com/account/reg/signup?formid:urx-43183',
    id: 'WD75lK',
  },
  'scene.0.links.1.text': {
    defaultMessage: 'Learn more about Infuse',
    id: 'dsbXyL',
  },
  'scene.0.links.1.href': {
    defaultMessage: '/analytics/put-ai-to-work',
    id: 'rjG0sn',
  },
  'scene.1.title': { defaultMessage: 'Analyze', id: 'HJv0iT' },
  'scene.1.content': {
    defaultMessage: 'Build and scale AI with trust and transparency',
    id: '83auDt',
  },
  'scene.1.links.0.text': {
    defaultMessage: 'Take the assessment',
    id: 'u1e2zt',
  },
  'scene.1.links.0.href': {
    defaultMessage: '/links?url:https%3A//mainstayadvisor.com/go/ibm/dss',
    id: 'pnmCN/',
  },
  'scene.1.links.1.text': {
    defaultMessage: 'Learn more about Analyze',
    id: 'MaSVKx',
  },
  'scene.1.links.1.href': {
    defaultMessage: '/analytics/data-science-ai',
    id: 'DVHGtH',
  },
  'scene.2.title': { defaultMessage: 'Organize', id: '07n/Mt' },
  'scene.2.content': {
    defaultMessage: 'Create a business-ready analytics foundation',
    id: 'XKKeWH',
  },
  'scene.2.links.0.text': {
    defaultMessage: 'Read the white paper (PDF, 2.2 MB)',
    id: 'AbqzRO',
  },
  'scene.2.links.0.href': {
    defaultMessage:
      'https://www.ibm.com/account/reg/subscribe?formid:urx-40583',
    id: 'D/nhOy',
  },
  'scene.2.links.1.text': {
    defaultMessage: 'Learn more about Organize',
    id: 'xzn6ap',
  },
  'scene.2.links.1.href': {
    defaultMessage: '/analytics/dataops',
    id: 'Ld/NAl',
  },
  'scene.3.title': { defaultMessage: 'Collect', id: 'kCPl0r' },
  'scene.3.content': {
    defaultMessage: 'Make your data simple and accessible',
    id: 'SQ/xYC',
  },
  'scene.3.links.0.text': {
    defaultMessage: 'View the interactive guide',
    id: 'C8FfA9',
  },
  'scene.3.links.0.href': {
    defaultMessage:
      'https://www.ibm.com/analytics/data-management/resources/what-is-hybrid-data-management',
    id: 'B3xXRU',
  },
  'scene.3.links.1.text': {
    defaultMessage: 'Learn more about Collect',
    id: 'xnyCGD',
  },
  'scene.3.links.1.href': {
    defaultMessage: '/analytics/data-management',
    id: 'L/KZP6',
  },
  'scene.4.title': { defaultMessage: 'Modernize', id: '5kb1vP' },
  'scene.4.content': {
    defaultMessage: 'Make your data ready for an AI and hybrid cloud world',
    id: 'oM5cq9',
  },
  'scene.4.links.0.text': {
    defaultMessage: 'Watch the video (03:17)',
    id: '+gCkh0',
  },
  'scene.4.links.0.href': {
    defaultMessage: 'https://mediacenter.ibm.com/id/1_ju3pb114',
    id: 'kqPRPF',
  },
  'scene.4.links.1.text': {
    defaultMessage: 'Modernize your data',
    id: 'czUTj8',
  },
  'scene.4.links.1.href': {
    defaultMessage: 'https://www.ibm.com/analytics/data-ai-platform',
    id: 'a5jxbi',
  },
  'scene.5.title': { defaultMessage: 'Talent & Expertise', id: 'GEGn2g' },
  'scene.5.content': {
    defaultMessage:
      'Tap into IBM expertise to build the skills required to successfully apply enterprise AI',
    id: 'dpwvja',
  },
  'scene.5.links.0.text': { defaultMessage: 'Learn more', id: 'TdTXXf' },
  'scene.5.links.0.href': {
    defaultMessage: '/analytics/expert-advice/',
    id: 'c2NLJW',
  },
};

export function getSceneNumbers(): number[] {
  return Object.keys(msgs)
    .filter((k) => k.match(/^scene\.[0-9]\.content$/))
    .map((k) => Number(k.split('.')[1]));
}

export function getLinkNumbers(sceneNumber: number | null): number[] {
  const rootId = sceneNumber === null ? 'home' : `scene\.${sceneNumber}`;
  return Object.keys(msgs)
    .filter((k) => k.match(new RegExp(`${rootId}\.links\.[0-9]\.href`)))
    .map((k) => Number(k.split('.')[sceneNumber === null ? 2 : 3]));
}

export default defineMessages(msgs);
