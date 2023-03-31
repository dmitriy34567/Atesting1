import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://bold-sun-8337.fly.dev/');

test('1 Check if the "Call Form" button is visible on the page.', async t => {
    const callFormButton = Selector('button#call-form-button');

    await t
        .expect(callFormButton.exists).ok()
        .expect(callFormButton.visible).ok();
});

test('2 Verify that a pop-up window with the form opens after clicking the "Call Form" button', async t => {
    const callFormButton = Selector('button#call-form-button');
    const popupForm = Selector('div#call-form');

    await t
        .click(callFormButton)
        .expect(popupForm.visible).ok();
});

test('3 Confirm that the form has the correct fields and options', async t => {
    const callFormButton = Selector('button#call-form-button');
    const popupForm = Selector('div#call-form');
    const callType = popupForm.find('div#call-type');
    const inputNumber = popupForm.find('input#phone-number');
    const inputArea = popupForm.find('textarea#call-result');

    await t
        .click(callFormButton)
        .expect(popupForm.visible).ok();

        // Проверяем, что поля формы существуют и имеют правильный тип и название
        await t
        .expect(callType.exists).ok()
        .expect(callType.getAttribute('role')).eql('button')
        .click(callType)
        const dropdownMenuItems = Selector('.MuiList-root .MuiMenuItem-root');
        await t.expect(dropdownMenuItems.count).eql(2);
        const incomingCallItem = Selector('.MuiList-root .MuiMenuItem-root').nth(0);
        await t.expect(incomingCallItem.innerText).eql('Incoming Call');
        const outgoingCallItem = Selector('.MuiList-root .MuiMenuItem-root').nth(1);
        await t.expect(outgoingCallItem.innerText).eql('Outgoing Call');
    

        
        await t.expect(Selector('.MuiAutocomplete-inputRoot #phone-number').exists).ok();
        
        await t.expect(Selector('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-multiline.css-15kq27i').exists).ok();

});


test('4 Verify that the form fields are updated after changing the "Call Type" drop down list value.', async t => {
    const callFormButton = Selector('button#call-form-button');
    const popupForm = Selector('div#call-form');
    const callType = popupForm.find('div#call-type');
    

    await t
        .click(callFormButton)
        .expect(popupForm.visible).ok();

        // Проверяем, что поля формы существуют и имеют правильный тип и название
        await t
        .expect(callType.exists).ok()
        .expect(callType.getAttribute('role')).eql('button')
        .click(callType)

        const dropdownMenuItems = Selector('.MuiList-root .MuiMenuItem-root');
        await t.expect(dropdownMenuItems.count).eql(2);
        const incomingCallItem = Selector('.MuiList-root .MuiMenuItem-root').nth(0);
        await t.expect(incomingCallItem.innerText).eql('Incoming Call');
       
        await t.expect(popupForm.visible).ok();
        const outgoingCallItem = Selector('.MuiList-root .MuiMenuItem-root').nth(1);
        await t.expect(outgoingCallItem.innerText).eql('Outgoing Call');


        await t.click(incomingCallItem);
        const callReasonInput = Selector('input[name="callReason"]');
        await t.expect(callReasonInput.exists).ok();

        await t.click(callFormButton)
        await t.click(outgoingCallItem);
        const resultTypeInput = Selector('input[name="resultType"]');
        await t.expect(resultTypeInput.exists).ok();
});
