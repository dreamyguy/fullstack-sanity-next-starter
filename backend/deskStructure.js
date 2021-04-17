import S from '@sanity/desk-tool/structure-builder';
import {
  MdAccountCircle,
  MdCode,
  MdCollectionsBookmark,
  MdFlashOn,
  MdFormatListBulleted,
  MdLibraryBooks,
  MdLibraryMusic,
  MdMemory,
  MdMusicNote,
  MdMusicVideo,
  MdPersonPin,
  MdQueueMusic,
  MdSettings,
  MdStar,
  MdStars,
} from 'react-icons/md';

export default () =>
  S.list()
    .showIcons(true)
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .icon(MdSettings)
        .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title('Blog')
        .icon(MdCollectionsBookmark)
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Author')
                .icon(MdAccountCircle)
                .child(
                  S.documentList().schemaType('author').title('Author').filter('_type == "author"'),
                ),
              S.listItem()
                .title('Category')
                .icon(MdFormatListBulleted)
                .child(
                  S.documentList()
                    .schemaType('category')
                    .title('Category')
                    .filter('_type == "category"'),
                ),
              S.listItem()
                .title('Post')
                .icon(MdFlashOn)
                .child(S.documentList().schemaType('post').title('Post').filter('_type == "post"')),
            ]),
        ),
      S.listItem()
        .title('Music')
        .icon(MdLibraryMusic)
        // .child(S.editor().schemaType('blog').documentId('blog')),
        .child(
          S.list()
            .title('Music')
            .items([
              S.listItem()
                .title('Record Label')
                .icon(MdStars)
                .child(id =>
                  S.documentList()
                    .schemaType('RecordLabel')
                    .title('Record Label')
                    .filter('_type == "RecordLabel"')
                    .params({ id }),
                ),
              S.listItem()
                .title('Artist')
                .icon(MdAccountCircle)
                .child(id =>
                  S.documentList()
                    .schemaType('Artist')
                    .title('Artist')
                    .filter('_type == "Artist"')
                    .params({ id }),
                ),
              S.listItem()
                .title('Influence')
                .icon(MdPersonPin)
                .child(id =>
                  S.documentList()
                    .schemaType('Influence')
                    .title('Influence')
                    .filter('_type == "Influence"')
                    .params({ id }),
                ),
              S.listItem()
                .title('Genre')
                .icon(MdQueueMusic)
                .child(id =>
                  S.documentList()
                    .schemaType('Genre')
                    .title('Genre')
                    .filter('_type == "Genre"')
                    .params({ id }),
                ),
              S.listItem()
                .title('Release')
                .icon(MdMusicNote)
                .child(id =>
                  S.documentList()
                    .schemaType('Release')
                    .title('Release')
                    .filter('_type == "Release"')
                    .params({ id }),
                ),
              S.listItem()
                .title('Release Type')
                .icon(MdMusicVideo)
                .child(id =>
                  S.documentList()
                    .schemaType('ReleaseType')
                    .title('Release Type')
                    .filter('_type == "ReleaseType"')
                    .params({ id }),
                ),
            ]),
        ),
      S.listItem()
        .title('Development')
        .icon(MdLibraryBooks)
        .child(
          S.list()
            .title('Development')
            .items([
              S.listItem()
                .title('GitHub Username')
                .icon(MdMemory)
                .child(
                  S.documentList()
                    .schemaType('GitHubUsername')
                    .title('GitHubUsername')
                    .filter('_type == "GitHubUsername"'),
                ),
              S.listItem()
                .title('Project')
                .icon(MdCode)
                .child(
                  S.documentList()
                    .schemaType('Project')
                    .title('Project')
                    .filter('_type == "Project"'),
                ),
              S.listItem()
                .title('Portfolio')
                .icon(MdStar)
                .child(
                  S.documentList()
                    .schemaType('Portfolio')
                    .title('Portfolio')
                    .filter('_type == "Portfolio"'),
                ),
            ]),
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types,
      // but filter out the ones that have gotten a 'section'.
      // Useful to 'catch' newly created schema types that
      // haven't been been assigned to a 'section' yet.
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'siteSettings',
            // blog
            'author',
            // 'post',
            'category',
            // // Music
            // 'RecordLabel',
            // 'Artist',
            // 'Influence',
            // 'Genre',
            // 'Release',
            // 'ReleaseType',
            // // Dev
            // 'GitHubUsername',
            // 'Portfolio',
            // 'Project',
          ].includes(listItem.getId()),
      ),
    ]);
