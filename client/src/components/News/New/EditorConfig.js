import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

const EditorConfig = ({ editorLanguage, placeholderText }) => ({
  //language: editorLanguage, 
  link: { addTargetToExternalLinks: true },
  mediaEmbed: {
    previewsInData: true,
  },
  placeholder: placeholderText,
  plugins: [ Essentials, Autoformat, Bold, Italic, Underline, Strikethrough, BlockQuote,
    CKFinder, Heading, Link, List, MediaEmbed, Paragraph, PasteFromOffice, Table, TableToolbar, TextTransformation ],
  toolbar: [ 'heading', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', '|', 'alignment', 'bulletedList', 'numberedList', '|', 'blockQuote', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo',
  ],
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
});
export default EditorConfig;