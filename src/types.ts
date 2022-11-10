import type { EmitterSubscription } from 'react-native';

type IntentActionConfigTuple = [string, string][];
type IntentActionConfig = { action: string; datakey: string }[];

interface BroadcastEventData {
  /**
   * Scanned barcode data from harware scanners
   */
  data: string;
}
type BroadcastEventCallback = (d: BroadcastEventData) => void;

interface NativeModuleType {
  getPhoneID(): Promise<string[]>;
  setIntentConfig(args: IntentActionConfigTuple): Promise<boolean>;
}

interface BroadcastReceiverInterface {
  /**
   * Get device harware id
   */
  getPhoneID(): Promise<string[]>;
  /**
   *
   * @param args ``` [intentAction: string, intentExtrasDataKey: string][] ```
   * @description
   *  - `intentAction` is the actions name that'd be registered for `android.BroadcastReceiver`
   *  - `intentExtrasDataKey` will be used to extract data from the intent
   */
  setIntentActionConfig(args: IntentActionConfig): Promise<boolean>;
  addEventListner(cb: BroadcastEventCallback): EmitterSubscription;
}

export {
  NativeModuleType,
  BroadcastReceiverInterface,
  IntentActionConfigTuple,
  IntentActionConfig,
  BroadcastEventData,
  BroadcastEventCallback,
};
