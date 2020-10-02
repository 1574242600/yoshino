import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Site } from "../../src/global"
import Page from '../../src/layout/page';

jest.mock('../../src/tools/site.class')
Site.getIndex.mockResolvedValue({ total: 13, per_page: 10, pages: 2 });


describe('测试文章列表', () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });


})