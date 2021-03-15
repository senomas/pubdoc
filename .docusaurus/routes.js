
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','703'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','0ff'),
  exact: true,
},
{
  path: '/docs/research',
  component: ComponentCreator('/docs/research','9af'),
  exact: true,
},
{
  path: '/docs/snippets/docker',
  component: ComponentCreator('/docs/snippets/docker','3e4'),
  exact: true,
},
{
  path: '/docs/snippets/git',
  component: ComponentCreator('/docs/snippets/git','61f'),
  exact: true,
},
{
  path: '/docs/snippets/java',
  component: ComponentCreator('/docs/snippets/java','2cb'),
  exact: true,
},
{
  path: '/docs/snippets/nodejs',
  component: ComponentCreator('/docs/snippets/nodejs','f5d'),
  exact: true,
},
{
  path: '/docs/tool',
  component: ComponentCreator('/docs/tool','f2e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
