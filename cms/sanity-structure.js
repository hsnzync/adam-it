import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = (listItem) =>
    !['terms', 'privacy'].includes(listItem.getId())

export default () =>
    S.list()
        .title('Content overzicht')
        .items([
            S.listItem()
                .title('Algemene voorwaarden')
                .child(
                    S.editor()
                        .id('terms')
                        .schemaType('terms')
                        .documentId('singleton-terms')
                ),
            S.listItem()
                .title('Privacy beleid')
                .child(
                    S.editor()
                        .id('privacy')
                        .schemaType('privacy')
                        .documentId('singleton-privacy')
                ),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ])
