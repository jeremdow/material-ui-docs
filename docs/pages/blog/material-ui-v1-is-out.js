import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from '!@material-ui/markdown/loader!./material-ui-v1-is-out.md';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
