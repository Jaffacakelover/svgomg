import { FunctionComponent } from 'preact';
import {} from 'preact/hooks';
import { Signal } from '@preact/signals';

import * as styles from './styles.module.css';
import Rippler from '../../../../Rippler';

interface Props {
  text: string;
  checked: Signal<boolean>;
}

const CheckboxRow: FunctionComponent<Props> = ({ text, checked }) => {
  return (
    <Rippler>
      <div class={styles.checkboxRow}>
        <label class={styles.label}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => (checked.value = event.currentTarget.checked)}
          />{' '}
          {text}
        </label>
      </div>
    </Rippler>
  );
};

export { CheckboxRow as default };
