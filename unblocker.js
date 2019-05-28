async function click(btn) {
    for (i = 0; i < btn.length; i++) {
        await btn[i].click();
    }
}

async function unblock(timeOut = 500) {
    if (window.location.href === 'https://twitter.com/settings/blocked') {
        let pScroll, scroll = window.scrollY;
        do {
            window.scrollTo(0, document.body.scrollHeight);
            pScroll = scroll;
            await new Promise(resolve => setTimeout(resolve, timeOut));
            scroll = window.scrollY;
        } while((scroll - pScroll) > 0);

        let buttons = document.querySelectorAll('.blocked-text');
        if (buttons.length > 0) {
            let check1 = confirm('Do you want to unblock all ' + buttons.length + ' accounts?');
            if (check1) {
                let check2 = prompt('Are you sure? [y/N]');
                if (check2 === 'y' || check2 === 'Y') {
                    click(buttons);
                } else {
                    alert('Ok!');
                }
            } else {
                alert('Ok!');
            }
        } else {
            alert('No blocked account!');
        }
    } else {
        alert('You are redirecting to settings/blocked. Run the script again.');
        document.location.href = 'https://twitter.com/settings/blocked';
    }
}
