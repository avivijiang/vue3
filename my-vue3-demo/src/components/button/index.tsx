import { defineComponent, ref, reactive, toRefs } from 'vue'
import { ButtonProps, ButtonSize } from './type'
const Button =  defineComponent({
	name: 'DuiButton',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'default'
        },
        text: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'medium'
		},
		icon: {
			type: String,
			default: ''
		},
		shape: {
            type: String,
		    default: ''  
        }
	},
	setup(props, context) {
		const { slots: { default: _default }, attrs } = context
		const { loading, disabled, type, size, text} = toRefs(props)
		const { emit } = context

		function onClick(event: Event) {
			if (!loading && !disabled) {
				emit('click', event)
			}
		}
		function getClasses() {
			// large => lg
			// small => sm
			return {
				[`dui-button-${type}`]: type,
				[`dui-button-${size}`]: size,
				['dui-button-loading']: loading
			}
		}
		const classes = getClasses()
		return () => (
			<button {...attrs} class={classes} onClick={onClick}>
				<slot>{text}</slot>
			</button>
		)
	}
})

export default {
  name: Button.name,
  component: Button,
};
