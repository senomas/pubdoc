
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/pubdoc/',
  component: ComponentCreator('/pubdoc/','6e0'),
  exact: true,
},
{
  path: '/pubdoc/docs',
  component: ComponentCreator('/pubdoc/docs','313'),
  
  routes: [
{
  path: '/pubdoc/docs/',
  component: ComponentCreator('/pubdoc/docs/','c27'),
  exact: true,
},
{
  path: '/pubdoc/docs/research',
  component: ComponentCreator('/pubdoc/docs/research','b22'),
  exact: true,
},
{
  path: '/pubdoc/docs/snippets/docker',
  component: ComponentCreator('/pubdoc/docs/snippets/docker','259'),
  exact: true,
},
{
  path: '/pubdoc/docs/snippets/git',
  component: ComponentCreator('/pubdoc/docs/snippets/git','14a'),
  exact: true,
},
{
  path: '/pubdoc/docs/snippets/java',
  component: ComponentCreator('/pubdoc/docs/snippets/java','bf7'),
  exact: true,
},
{
  path: '/pubdoc/docs/snippets/nodejs',
  component: ComponentCreator('/pubdoc/docs/snippets/nodejs','48f'),
  exact: true,
},
{
  path: '/pubdoc/docs/tool',
  component: ComponentCreator('/pubdoc/docs/tool','f5d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
