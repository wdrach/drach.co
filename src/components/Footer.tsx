import React, { useState } from 'react';

// @ts-ignore
import { AppBar, Button, List, ListItem, Toolbar } from 'react95';

function Footer() {
    const [start, setStart] = useState<boolean>(false);

    return (
        <AppBar style={{position: 'fixed', bottom: 0, top: 'unset'}}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button
                    onClick={() => setStart(!start)}
                    active={start}
                    style={{ fontWeight: 'bold' }}
                >
                    <img
                    src='/logo192.png'
                    alt='logo'
                    style={{ height: '20px', marginRight: 4 }}
                    />
                    Start
                </Button>
                {start && (
                    <List
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        left: '10px',
                    }}
                    >
                        <ListItem>
                            <span role='img' aria-label='📄'>
                                📄
                            </span>
                            Resume
                        </ListItem>
                    </List>
                )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;