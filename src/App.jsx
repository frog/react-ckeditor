import './App.css'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useRef, useEffect, useState } from 'react';

function App() {

    const presenceListElementRef = useRef();
    const sidebarElementRef = useRef();

    const [layoutReady, setLayoutReady] = useState(false)

    useEffect(() => {
        setLayoutReady(true);
    }, [])


    return (
        <>
            <div className="centered">
                <div className="row-presence">
                    <div ref={presenceListElementRef} className="presence"></div>
                </div>
            </div>
            {
                layoutReady &&
                (
                    <CKEditor
                        editor={Editor}
                        data="<p>Hello from CKEditor 5!</p>"
                        config={{
                            cloudServices: {
                                tokenUrl: 'https://92300.cke-cs.com/token/dev/I48OSviEiyjn23oXftJtsVDoUOBXyjgBsbt1?limit=10',
                                webSocketUrl: 'wss://92300.cke-cs.com/ws'
                            },
                            collaboration: {
                                channelId: 'document-id-test-1'
                            },
                            ckbox: {
                                tokenUrl: 'https://92300.cke-cs.com/token/dev/I48OSviEiyjn23oXftJtsVDoUOBXyjgBsbt1?limit=10'
                            },
                            sidebar: {
                                container: sidebarElementRef.current
                            },
                            presenceList: {
                                container: presenceListElementRef.current
                            },
                        }}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            console.log({ data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                )
            }
            <div ref={sidebarElementRef} className="sidebar"></div>
        </>
    )
}

export default App
