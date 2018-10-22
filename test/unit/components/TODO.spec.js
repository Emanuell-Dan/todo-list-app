import { mount } from '@vue/test-utils';
import TODO from '@/components/TODO';

describe('<TODO/>', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(TODO);
	});

	it('should render a TODO component with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('add to list', () => {
		it('does not get called if item is an empty string', () => {
			cmp.vm.addToList();

			expect(cmp.vm.list).toHaveLength(0);
		});

		it('adds item to the list if it\'s a valid string', () => {
			cmp.setData({ item: 'valid' });
			cmp.vm.addToList();

			expect(cmp.vm.list).toContain('valid');
		});

		it('adds item to the list if it has not been previously added', () => {
			cmp.setData({ list: ['item1'], item: 'item1' });
			cmp.vm.addToList();

			expect(cmp.vm.list).toHaveLength(1);
		});
	});

	describe('clear list', () => {
		beforeEach(() => {
			cmp.vm.clearList();
		});

		it('empties list array', () => {
			expect((cmp.vm.list).length).toBe(0);
		});

		it('empties completed array', () => {
			expect((cmp.vm.completed).length).toBe(0);
		});
	});

	// describe('scratch item', () => {
	// 	beforeEach(() => {
	// 		cmp.setData({ list: ['item1'] });
	// 		cmp.vm.scratchItem();
	// 	});
	//
	// 	it('removes item from the list array', () => {
	// 		expect(cmp.vm.list).not.toContain('item1');
	// 	});
	//
	// 	it('adds removed item from the list array to the completed array', () => {
	// 		expect(cmp.vm.completed).toContain('item1');
	// 	});
	// });
});
