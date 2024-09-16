import { expect, Page } from "@playwright/test";
import { allowedNodeEnvironmentFlags } from "process";

export default class BarsAndSliders {
    constructor(public page: Page) { }

    async Slider(targetValue: number) {

        await this.page.getByText("Drag & Drop Sliders").click();
        expect(this.page.url()).toContain('drag-drop-range-sliders-demo');
        const cookiebox='#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
        
        if (await this.page.locator(cookiebox).isVisible()) {
            await this.page.click(cookiebox);
            console.log('Cookie consent popup found and clicked.');
        }

        const slider = this.page.locator('input.sp__range').nth(2);

        const sliderBox = await slider.boundingBox(); // Get the slider's bounding box
        if (!sliderBox) {
            throw new Error('Slider bounding box not found');
        }

        const initialValue = await slider.evaluate((el: HTMLInputElement) => parseInt(el.value, 10));
        console.log(`Initial slider value: ${initialValue}`);

        let currentValue = initialValue;
        const step = 20; // Step size for each movement

        while (currentValue < targetValue) {

            const nextValue = Math.min(currentValue + step, targetValue);
            const moveRatio = (nextValue - 1) / 100; // Assuming slider range is 1-100
            const moveX = sliderBox.x + (sliderBox.width * moveRatio);
            const moveY = sliderBox.y + (sliderBox.height / 2);
            await this.page.mouse.move(moveX, moveY);
            await this.page.mouse.down();
            await this.page.mouse.up();

            currentValue = await slider.evaluate((el: HTMLInputElement) => parseInt(el.value, 10));

            if (currentValue >= targetValue) {
                break;
            }
        }

        if (currentValue !== targetValue) {
            const finalMoveRatio = (targetValue - 1) / 100;
            const finalMoveX = sliderBox.x + (sliderBox.width * finalMoveRatio);
            const finalMoveY = sliderBox.y + (sliderBox.height / 2);

            await this.page.mouse.move(finalMoveX, finalMoveY);
            await this.page.mouse.down();
            await this.page.mouse.up();
        }

        const finalValue = await slider.evaluate((el: HTMLInputElement) => parseInt(el.value, 10));
        console.log(`Final slider value: ${finalValue}`);

        expect(finalValue).toEqual(targetValue)
    }
}