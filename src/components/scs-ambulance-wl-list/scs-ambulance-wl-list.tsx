import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { AmbulanceWaitingListApiFactory, WaitingListEntry } from '../../api/ambulance-wl';

@Component({
  tag: 'scs-ambulance-wl-list',
  styleUrl: 'scs-ambulance-wl-list.css',
  shadow: true,
})
export class ScsAmbulanceWlList {
  @Event({ eventName: 'entry-clicked' }) entryClicked: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @State() errorMessage: string;

  waitingPatients: WaitingListEntry[];

  private async getWaitingPatientsAsync(): Promise<WaitingListEntry[]> {
    try {
      const response = await AmbulanceWaitingListApiFactory(undefined, this.apiBase).getWaitingListEntries(this.ambulanceId);
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot retrieve list of waiting patients: ${response.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || 'unknown'}`;
    }
    return [];
  }

  private isoDateToLocale(iso: string | undefined): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleTimeString();
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        {this.errorMessage ? (
          <div class="error">{this.errorMessage}</div>
        ) : (
          <md-list>
            {this.waitingPatients.map(patient => (
              <md-list-item onClick={() => this.entryClicked.emit(patient.id)}>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{'Predpokladaný vstup: ' + this.isoDateToLocale(patient.estimatedStart)}</div>
                <md-icon slot="start">person</md-icon>
              </md-list-item>
            ))}
          </md-list>
        )}
        <md-filled-icon-button class="add-button" onclick={() => this.entryClicked.emit('@new')}>
          <md-icon>add</md-icon>
        </md-filled-icon-button>
      </Host>
    );
  }
}
