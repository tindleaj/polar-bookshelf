import * as React from "react";
import {DataLoader} from "../../../web/js/ui/data_loader/DataLoader";
import {Tag} from "polar-shared/src/tags/Tags";
import {PersistenceLayerProvider} from "../../../web/js/datastore/PersistenceLayer";
import {PersistentPrefs} from "../../../web/js/util/prefs/Prefs";
import {DatastoreUserTags} from "../../../web/js/datastore/DatastoreUserTags";

export class UserTagsDataLoader extends React.Component<IProps, IState> {

    public render() {

        const prefs = this.props.persistenceLayerProvider().datastore.getPrefs();

        const render = (prefs: PersistentPrefs | undefined) => {

            if (prefs) {

                const userTags = DatastoreUserTags.get(prefs);
                return this.props.render(userTags);

            } else {
                return this.props.render(undefined);
            }

        };

        return (
            <DataLoader provider={prefs.subscribe}
                        render={prefs => render(prefs)}/>
        );

        return null;

    }

}

export interface IProps {
    readonly persistenceLayerProvider: PersistenceLayerProvider;
    readonly render: (userTags: ReadonlyArray<Tag> | undefined) => React.ReactElement;
}

interface IState {

}
